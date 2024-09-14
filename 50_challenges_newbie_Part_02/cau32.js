// 32. Create a function that will capitalize the first letter of each word in a text
//Viết hàm viết hoa chữ cái đầu của mỗi từ trong một chuỗi

function capitalizeFirstLetter(text) {
    const words = text.split(' ');
    const capitalizedWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1); 
    });
    return capitalizedWords.join(' ');
}

console.log(capitalizeFirstLetter('hello world'));