
function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
}

function changeAtiveTab(event,tabID) {
    let element = event.target;
    while(element.nodeName !== "A") {
        element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++) {
        aElements[i].classList.remove("text-white");
        aElements[i].classList.remove("bg-gray-800");
        aElements[i].classList.add("text-slate-600");
        aElements[i].classList.add("bg-white");
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-gray-800");
    element.classList.remove("bg-white");
    element.classList.add("text-white");
    element.classList.add("bg-gray-800");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function app() {
    return {
        month: '',
        year: '',
        no_of_days: [],
        blankdays: [],
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        events: [
            {
                event_date: new Date(2020, 3, 1),
                event_title: "April Fool's Day",
                event_theme: 'blue'
            },

            {
                event_date: new Date(2020, 3, 10),
                event_title: "Birthday",
                event_theme: 'red'
            },

            {
                event_date: new Date(2020, 3, 16),
                event_title: "Upcoming Event",
                event_theme: 'green'
            }
        ],
        event_title: '',
        event_date: '',
        event_theme: 'blue',

        themes: [
            {
                value: "blue",
                label: "Beach Cleaning"
            },
            {
                value: "yellow",
                label: "Animal Shelter"
            },
            {
                value: "green",
                label: "Mountain Cleaning"
            },
        ],

        openEventModal: false,

        initDate() {
            let today = new Date();
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString();
        },

        isToday(date) {
            const today = new Date();
            const d = new Date(this.year, this.month, date);

            return today.toDateString() === d.toDateString() ? true : false;
        },

        showEventModal(date) {
            // open the modal
            this.openEventModal = true;
            this.event_date = new Date(this.year, this.month, date).toDateString();
        },

        addEvent() {
            if (this.event_title == '') {
                return;
            }

            this.events.push({
                event_date: this.event_date,
                event_title: this.event_title,
                event_theme: this.event_theme
            });

            console.log(this.events);

            // clear the form data
            this.event_title = '';
            this.event_date = '';
            this.event_theme = 'blue';

            //close the modal
            this.openEventModal = false;
        },

        getNoOfDays() {
            let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

            // find where to start calendar day of week
            let dayOfWeek = new Date(this.year, this.month).getDay();
            let blankdaysArray = [];
            for ( var i=1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }

            let daysArray = [];
            for ( var i=1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }
            
            this.blankdays = blankdaysArray;
            this.no_of_days = daysArray;
        }
    }
}