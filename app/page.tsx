export default async function A() {

    const blah = await fetch('https://api.github.com/users/vercel')

    return 'A'
}
