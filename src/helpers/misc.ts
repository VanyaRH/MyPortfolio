export const screenWidth = () => {
    return window.innerWidth;
}

export const globalOverflow = (hidden: boolean) => {
    if(hidden){
        document.body.classList.add('overflow-hidden');
    }else{
        document.body.classList.remove('overflow-hidden');
    }
}