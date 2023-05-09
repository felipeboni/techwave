export default function ProductCard({ props }) {
    console.log(props)

    return (
        <a href="#" className="flex bg-white border-2 rounded-xl border-sky-100/50">
            <div className="flex">
                <p className="line-clamp-1">{props.title}</p>
            </div>
        </a>
    )
}