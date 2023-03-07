// var text = `JavaScript, theo phiên bản hiện hành, 
// là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu.
// Ngôn ngữ này được dùng rộng rãi cho các trang web (phía người dùng) cũng như phía máy chủ (với Nodejs). 
// Nó vốn được phát triển bởi Brendan Eich tại Hãng truyền thông Netscape với cái tên đầu tiên Mocha, 
// rồi sau đó đổi tên thành LiveScript, và cuối cùng thành JavaScript. 
// Giống Java, JavaScript có cú pháp tương tự C, nhưng nó gần với Self hơn Java. 
// .js là phần mở rộng thường được dùng cho tập tin mã nguồn JavaScript. Phiên bản mới nhất của JavaScript là ECMAScript 12[3]. 
// ECMAScript là phiên bản chuẩn hóa của JavaScript. 
// Trình duyệt Mozilla phiên bản 1.8 beta 1 có hỗ trợ không đầy đủ cho E4X - phần mở rộng cho JavaScript hỗ trợ làm việc với XML, được chuẩn hóa trong ECMA-357.`

// function appear(word) {
//     var lowerCaseText = text.toLowerCase()
//     var lowerCaseWord = word.toLowerCase()
//     var times = lowerCaseText.split(lowerCaseWord).length - 1
//     console.log('số lần xuất hiện: ' + times.toString())

// }
// console.log(text)
// appear('JAVASCRIPT')

function count(){
    var lowerCaseText = document.getElementById('input').value.toLowerCase()
    var lowerCaseWord = document.getElementById('find').value.toLowerCase()
    var times = lowerCaseText.split(lowerCaseWord).length - 1
    var result = document.getElementById('output')
    result.innerHTML = 'số lần xuất hiện là: ' + times
}