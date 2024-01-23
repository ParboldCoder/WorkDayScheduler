// I decided to rewrite my code using more technical format to see if my skills could be pushed further. 
// I used forEach when iterating over hours for the purpose of side effects. 
// I find it simplifies some of the functions and optimizes the code to be more concise.


const currentDayEl = $("#currentDay");
const containerEl = $(".container");

const hours = Array.from({ length: 9 }, (_, index) => index + 9);
const currentDay = dayjs();

const setDay = () => currentDayEl.text(currentDay.format("dddd D MMMM YYYY"));

const createTimeBlocks = () => {
    hours.forEach(hour => {
        const block = $(`
            <form>
                <div class='row time-block'>
                    <div class='col-2 hour'>
                        ${hour}:00
                    </div>
                    <textarea class='col-8 description textInput' name='textInput'></textarea>
                    <button class='col-2 saveBtn' type='submit'><i class='fas fa-save'></i></button>
                </div>
            </form>`
        );

        containerEl.append(block);
    });
};

const assignColor = () => {
    $(".time-block").each((i, block) => {
        const comparison = hours[i] < currentDay.hour() ? "past" : hours[i] === currentDay.hour() ? "present" : "future";
        $(block).addClass(comparison);
    });
};

$(document).on("submit", "form", event => {
    event.preventDefault();
    const textInput = $(event.target).find("textarea[name='textInput']").val().trim();
    const hourForLocalStorage = $(event.target).find(".hour").text();
    localStorage.setItem(`savedData ${hourForLocalStorage}`, textInput);
});

const assignStoredText = () => {
    $(".time-block").each((i, block) => {
        const hour = $(block).find(".hour").text();
        const storedText = localStorage.getItem(`savedData ${hour}`);
        $(block).find("textarea[name='textInput']").val(storedText);
    });
};

setDay();
createTimeBlocks();
assignColor();
assignStoredText();
