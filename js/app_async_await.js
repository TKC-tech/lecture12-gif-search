/*******************************

GAME PLAN:

1. WHEN user types in query and hits enter
2. read the value of the input field
    and store into variable
3. somehow transmit the variable to giphy
    for search results
4. take search results and append them
    to the js-content div (for display)

********************************/


const getImgTag = function(object) {
    return `<img src="${object.images.downsized.url}">`;
}

const onDataLoaded = function(gifData) {
    
}

const onKeyPress = async function(evtObj) {

    if (evtObj.key === 'Enter') {
        evtObj.preventDefault()
        console.log('key is pressed', evtObj.key)
        const searchQuery = gifQuery.val();
        gifQuery.attr('placeholder', searchQuery)
        gifQuery.val('');

        const apiEndpoint = `http://api.giphy.com/v1/gifs/search?api_key=092c46931d544511a32b9911142ec6b9&q=${searchQuery}`
        const gifData = await $.get(apiEndpoint)
        console.log(gifData)
        const imgTag = getImgTag(gifData.data['0'])
        $('.js-content').html(imgTag);
    }
};

const gifQuery = $('.js-gif-query');
gifQuery.keypress(onKeyPress);











