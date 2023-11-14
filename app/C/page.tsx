export default async function C() {
    const resp = await fetch('https://api.github.com/users/vercel')

    return 'C'
}
