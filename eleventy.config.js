
export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/public/js")
    eleventyConfig.addPassthroughCopy("./src/public/fonts")
    eleventyConfig.addPassthroughCopy("./src/public/imgs")

    eleventyConfig.addNunjucksFilter("log", (val) => console.log(val));
    
    return {
        dir: {
            input: "./src",
            output: "./docs",
            includes:"./_includes"
        }
    }
}