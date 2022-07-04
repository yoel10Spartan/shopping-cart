const adjustText = (text: string, length: number): string => {
    const lengthText: number = text.length;
    if(lengthText < (length + 1)){return text}
    return text.slice(0, length).trim().concat('...');
}

export default adjustText