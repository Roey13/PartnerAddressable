import React, { useState, useCallback, useRef } from 'react';
import * as XLSX from 'xlsx'
import ReactDataSheet from 'react-datasheet';
import { useSelector } from 'react-redux'
import { useDropzone } from 'react-dropzone';
import loading from '../assets/img/loading.gif'
import { modifyByChannel } from '../services/channelService.js'

export function Main() {
	const [items, setItems] = useState([])
	const { currItem } = useSelector(state => state.itemModule)
	const [tabNames, setTabNames] = useState([])
	const [count, setCount] = useState(0)
	const countRef =  useRef(null)

	const onDrop = useCallback(acceptedFiles => {
		readExcel(acceptedFiles)
	}, [currItem])

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const increaseCount = () => {
		countRef.current++
	  }



	const readExcel = (ev) => {
		increaseCount()
		let file
		if (ev.target) file = ev.target.files[0]
		else file = ev[0]
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsArrayBuffer(file)
			fileReader.onload = (ev) => {
				const bufferArray = ev.target.result
				const wb = XLSX.read(bufferArray, { type: 'buffer' })
				let wsnames = wb.SheetNames
				let data = []
				let tabNames = []
				wsnames.map((tab) => {
					const ws = wb.Sheets[tab]
					if (ws['!ref']) tabNames.push(tab)
					const tabData = XLSX.utils.sheet_to_json(ws, { raw: false })
					if (tabData.length > 0) data.push(tabData)
				})
				setTabNames(tabNames)
				resolve(data)
			}
			fileReader.onerror = ((error) => reject(error))
		})
		promise.then((d) => {
			let newArr = []
			d.map((sheetTab) => {
				let tempArr = []
				sheetTab.map((row, idx) => {
					const stringRow = Object.values(row)
					let newRow = []
					stringRow.map((cellData, jdx) => {
						const cellName = (idx + 1) + "-" + (jdx + 1)
						const cell = { value: cellData, width: 100, className: cellName }
						if (stringRow.length > 1) newRow.push(cell)
					})
					tempArr.push(newRow)
				})
				newArr.push(tempArr)
			})
			let newSheet = []
			let tabCount = 0

			if (newArr.length > 1) {
				newArr.map((sheetTab) => {
					let channelId
					if (tabCount === 0) channelId = "1351"
					if (tabCount === 1) channelId = "1353"
					if (tabCount === 2) channelId = "1365"
					const modifiedArr = modifyByChannel(sheetTab, channelId)
					newSheet.push(modifiedArr)
					tabCount++
				})
			} else {
				const modifiedArr = modifyByChannel(newArr[0], currItem.channelId)
				newSheet.push(modifiedArr)
			}
			setItems(newSheet)
		})
	}

	if (!currItem) return <div className="loading">
		<img className='loading-img' src={loading} alt="" />
	</div>

	return (
		<div className="main">
			<h1 className="channel-title">{currItem.channelName}</h1>
			<section className="dropzone-container">
				<div {...getRootProps({ className: 'dropzone' })}>
					<input {...getInputProps()} onChange={readExcel} />
					<p>גררי את הקבצים לכאן או לחצי כדי לבחור קבצים</p>
				</div>
			</section>
			<div className="sheets-container">
				{items.map((item, idx) => {
					return (
						<div className="sheet" key={idx}>
							{tabNames.length > 1 && <h3>{tabNames[idx]}</h3>}
							<ReactDataSheet
								data={item}
								valueRenderer={cell => cell.value}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}