
export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/public/js")
    eleventyConfig.addPassthroughCopy("./src/public/fonts")
    eleventyConfig.addPassthroughCopy("./src/public/imgs")
    
    return {
        dir: {
            input: "./src",
            output: "./docs",
            includes:"./_includes"
        }
    }
}