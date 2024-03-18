// Hàm xử lý sự kiện khi người dùng nhấn nút quay số
function spinWheel() {
    // Sinh số ngẫu nhiên từ 1 đến 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = "Số may mắn của bạn là: " + randomNumber;

    // Gửi kết quả đến bot trên Telegram
    sendMessageToTelegram(randomNumber);
}

// Hàm gửi kết quả đến bot trên Telegram
function sendMessageToTelegram(number) {
    // Thay thế YOUR_BOT_TOKEN và CHAT_ID với token của bot và chat ID tương ứng
    var botToken = "6992916865:AAEdluVEglFEBhaqbiiR7CkdyeFKweN_Cic";
    var chatId = "pntakanodie_bot";
    var message = "Số may mắn của bạn là: " + number;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" + message);
    xhr.send();
}