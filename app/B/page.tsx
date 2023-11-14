export default async function B() {
    const resp = await fetch('https://api.github.com/users/vercel')

    return 'B'
}
