current_text = ""
track_text = ""

function polling() {
   	var text = $(".vjs-text-track-display")
	if(text.length > 0){
		t = text[0].textContent
		if (t != current_text) {
			track_text += t + "\n"
			current_text = t
		}
	}
    setTimeout(polling, 50)
}

polling()

// 在控制台里打印 track_text 以获得当前跟踪情况

track_text


