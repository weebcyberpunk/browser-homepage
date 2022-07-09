/*
 * Copyright (c) 2022 GG
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of 
 * this software and associated documentation files (the “Software”), to deal 
 * in the Software without restriction, including without limitation the rights to 
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 * of the Software, and to permit persons to whom the Software is furnished to do 
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all 
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE.
 */

function ping() {

    if (navigator.onLine) {
        windowPing.innerHTML = defaultPingText + " <strong>ONLINE</strong>"
        windowPing.style.color = "#ABE9B3"

    } else {
        windowPing.innerHTML = defaultPingText + " <strong>OFFLINE</strong>"
        windowPing.style.color = "#F28FAD"

    }
}

function clock() {
    let date = new Date()
    let hour    = ("0" +   date.getHours()).slice(-2)
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)
    let day     = date.getDate()
    let weekday = date.getDay()
    let month   = date.getMonth()

    let utcHour    = ("0" +   date.getUTCHours()).slice(-2)
    let utcMinutes = ("0" + date.getUTCMinutes()).slice(-2)

    windowClock.innerText = `${hour}:${minutes}:${seconds}`
    windowUTC.innerText   = `${utcHour}:${utcMinutes} in UTC Time.`
    windowDate.innerText  = `${weekdays[weekday]} ${months[month]} ${day}`

    if (hour <= 12 && hour >= 6) {
        windowGreet.innerText = "Good Morning!"

    } else if (hour < 18) {
        windowGreet.innerText = "Good Afternoon!"

    } else {
        windowGreet.innerText = "Good Night!"

    }
}

function updatePage() {
    clock()
    ping()
    
    setTimeout(function(){
        updatePage()
    }, 1000)
}

const windowGreet = document.querySelector("h2#greet")
const windowClock = document.querySelector("h1#clock") 
const windowUTC   = document.querySelector("p#utc")
const windowDate  = document.querySelector("p#date")

const windowPing      = document.querySelector("p#ping")
const defaultPingText = windowPing.innerHTML

const weekdays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ]

updatePage()
