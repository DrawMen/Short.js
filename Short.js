//Searching----------------------------------------------------------------------------------------

function Find(query, element = null){
    if(element != null){
        return element.querySelector(query);
    }
    else{
        return document.querySelector(query);
    }
}

function FindAll(query, element = null){
    if(element != null){
        return element.querySelectorAll(query);
    }
    else{
        return document.querySelectorAll(query);
    }
}



//Events-------------------------------------------------------------------------------------------

function OnEvent(element, event, callback, useCapture = false){
    element.addEventListener(event, callback, useCapture);
}



//Requests-----------------------------------------------------------------------------------------

function Get(url, callback, options = null){
    var http = new XMLHttpRequest();
    http.open('GET', url, true);

    //headers
    if(options){
        if(options.authorization) http.setRequestHeader('Authorization', options.authorization);
    }
    else{ 
        
    }

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            //callback when ready
            callback(http.responseText);
        }
    }
    http.send();
}

function Post(url, data, callback, options = null){
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    
    //headers
    if(options){
        if(options.contentType) http.setRequestHeader('Content-type', options.contentType);
        if(options.authorization) http.setRequestHeader('Authorization', options.authorization);
    }
    else{ 
        http.setRequestHeader('Content-type', 'application/json');
    }

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            //callback when ready
            callback(http.responseText);
        }
    }
    http.send(data);
}
