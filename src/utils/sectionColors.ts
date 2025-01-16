export const getSectionColor = (index: number) => {
    if (index % 3 == 0) {
        return {
            bgColor: "--color-purple",
            textColor: "--color-gray"
        }
    }
    if (index % 2 == 0) {
        return {
            bgColor: "--color-gray",
            textColor: "--text-primary-color"
        }
    }
    if (index % 1 == 0) {
        return {
            bgColor: "--color-white",
            textColor: "--text-primary-color"
        }
    }
    return {
        bgColor: "--color-light-gray",
        textColor: "--text-primary-color"
    }
}

