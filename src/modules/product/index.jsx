import { Star } from "react-feather";

export default function ProductCard({ props }) {
  console.log(props);

  const diff = props.listPrice && props.listPrice.value - props.price.value;

  return (
    <a
      href={`/product/${props.asin}`}
      className="relative flex flex-col flex-1 bg-white border-2 card rounded-xl border-sky-100/50"
    >
      {diff && (
        <div className="absolute flex flex-col items-center justify-center p-2 text-sm text-white bg-sky-500 discount-tag">
          <span>
            {Math.trunc(((props.listPrice.value - props.price.value) / (props.listPrice.value))  * 100)}%
          </span>
          <span>OFF</span>
        </div>
      )}

      <div className="flex-1 w-full thumb">
        <img src={props.thumbnailImage} alt="" />
      </div>

      <div className="flex flex-col flex-1 gap-2 font-semibold info text-slate-500">
        <h1 className="line-clamp-2">{props.title}</h1>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <h2>
              {props.price.currency}
              {props.price.value.toFixed(2)}
            </h2>
            {diff && (
              <h2 className="old-price">
                {props.listPrice.currency}
                {props.listPrice.value.toFixed(2)}
              </h2>
            )}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm stars">{props.stars}</span>
            <Star className="w-4 h-4" />
          </div>
        </div>

        {diff && (
          <>
            <hr className="border-sky-100/50" />

            <h3>
              Save {props.listPrice.currency}
              {(props.listPrice.value - props.price.value).toFixed(2)}
            </h3>
          </>
        )}
      </div>
    </a>
  );
}
