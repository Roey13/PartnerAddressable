export function modifyByChannel(sheet, channelId) {
    let newSheet = []
    let adNameVal = []
    let timeVal = []
    let tempSheet = []

    switch (channelId) {

        case '1293'://Foody
            sheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "5") {
                        const val = cell.value
                        const date = _handleDate(val, false)
                        cell.value = date
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "6") {
                        const val = cell.value
                        const time = _handleTime(val)
                        cell.value = time
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                })
                newSheet.push(newRow)
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "3") {
                        adNameVal.push(cell.value)
                        cell.value = channelId
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "4") {
                        let col = cellName.substring(0, dashIdx)
                        col -= 2
                        cell.value = adNameVal[col]
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                })
            })
            return newSheet

        case '1337'://BollyWood
        case '1339'://BollyShow
            sheet.map((row) => {
                row.map((cell) => {
                    if ((cell.value).includes('PARTNER')) tempSheet.push(row)
                })
            })
            tempSheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "1") {
                        const val = cell.value
                        const date = _handleDate(val, false)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "2") {
                        const val = cell.value
                        const time = _handleTime(val)
                        cell.value = time
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "3") {
                        cell.value = channelId
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "4") {
                        newRow.push(cell)
                    }
                })
                newSheet.push(newRow)
            })
            return newSheet

        case '1271'://Movies
            sheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "1") {
                        const val = cell.value
                        const date = _handleDate(val, false)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "2") {
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "3") {
                        const val = cell.value
                        const time = _handleTime(val)
                        timeVal.push(time)
                        cell.value = channelId
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "5") {
                        newRow.push(cell)
                    }
                })
                newSheet.push(newRow)
            })

            newSheet.map((row) => {
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "2") {
                        let col = cellName.substring(0, dashIdx)
                        col -= 1
                        cell.value = timeVal[col]
                    }
                })
            })
            return newSheet

        case '14731'://Series
        sheet.map((row) => {
            let newRow = []
            row.map((cell) => {
                const cellName = cell.className
                const dashIdx = cellName.indexOf("-")
                if (cellName.substring(dashIdx + 1) === "1") {
                    const val = cell.value
                    const date = _handleDate(val, false)
                    cell.value = date
                    newRow.push(cell)
                }
                if (cellName.substring(dashIdx + 1) === "2") {
                    const val = cell.value
                    const time = _handleTime(val)
                    timeVal.push(time)
                    newRow.push(cell)
                }
                if (cellName.substring(dashIdx + 1) === "3") {
                    cell.value = channelId
                    newRow.push(cell)
                }
                if (cellName.substring(dashIdx + 1) === "4") {
                    newRow.push(cell)
                }
            })
            newSheet.push(newRow)
        })

        newSheet.map((row) => {
            row.map((cell) => {
                const cellName = cell.className
                const dashIdx = cellName.indexOf("-")
                if (cellName.substring(dashIdx + 1) === "2") {
                    let col = cellName.substring(0, dashIdx)
                    col -= 1
                    cell.value = timeVal[col]
                }
            })
        })
        return newSheet

        case '1212'://Tedy
            sheet.map((row) => {
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "7") {
                        if (cell.value === "פרסומת") tempSheet.push(row)
                    }
                })
            })
            tempSheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "1") {
                        const val = cell.value
                        const date = _handleDate(val, true)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "2") {
                        const val = cell.value
                        const date = _handleTime(val)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "3") {
                        cell.value = channelId
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "5") {
                        newRow.push(cell)
                    }
                })
                newSheet.push(newRow)
            })
            return newSheet

        case '1105'://Promos
            sheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "1") {
                        const val = cell.value
                        const date = _handleDate(val, false)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "2") {
                        const val = cell.value
                        const date = _handleTime(val)
                        cell.value = date
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "3") {
                        cell.value = channelId
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "4") {
                        newRow.push(cell)
                    }
                })
                newSheet.push(newRow)
            })
            return newSheet

        case '1351'://Food+    
        case '1353'://Travel+    
        case '1365'://Health+
            sheet.map((row) => {
                let newRow = []
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "5") {
                        const val = cell.value
                        const date = _handleDate(val, true)
                        cell.value = date
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "6") {
                        const val = cell.value
                        const date = _handleTime(val)
                        cell.value = date
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "3") {
                        const val = cell.value
                        adNameVal.push(val)
                        cell.value = channelId
                    }
                })
                newSheet.push(newRow)
                row.map((cell) => {
                    const cellName = cell.className
                    const dashIdx = cellName.indexOf("-")
                    if (cellName.substring(dashIdx + 1) === "3") {
                        cell.value = channelId
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                    if (cellName.substring(dashIdx + 1) === "4") {
                        let col = cellName.substring(0, dashIdx)
                        col -= 2
                        cell.value = adNameVal[col]
                        if (cellName.substring(0, dashIdx) === "2") return
                        newRow.push(cell)
                    }
                })
            })

            return newSheet
    }

}

function _handleDate(date, isDateReversed) {
    let newDate
    let month = date.substring(0, date.indexOf("/"))
    if (month.length === 1) month = '0' + month
    let day = date.substring(date.indexOf("/") + 1, date.indexOf("/", 3))
    if (day.length === 1) day = '0' + day
    let year = date.substring(date.indexOf("/", 3) + 1, date.indexOf("/", 3) + 5)
    newDate = isDateReversed ? month + '/' + day + '/' + year : day + '/' + month + '/' + year
    return newDate
}

function _handleTime(time) {
    let minutes
    let hours = time.substring(0, time.indexOf(":"))
    if (hours.length === 1) hours = '0' + hours

    if (time.length > 5) {
        minutes = time.substring(time.indexOf(":") + 1, time.indexOf(":", 3))
    } else {
        minutes = time.substring(time.indexOf(":") + 1)
    }

    const newTime = hours + ":" + minutes
    return newTime
}