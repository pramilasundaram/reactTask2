export default function Description({ data, updatedes, removedes }) {
  return (
    <>
      {data.button === "View options" ? (
        <button class="btn btn-outline-dark mt-auto">{data.button}</button>
      ) : (
        ""
      )}
      {data.button !== "View options" ? (
        data.isvisible ? (
          <button
            disabled={!data.isvisible}
            class="btn btn-outline-dark mt-auto"
            onClick={() => updatedes(data.description, data.id)}
          >
            {data.button}
          </button>
        ) : (
          <button
            disabled={!data.isvisible}
            class="btn btn-outline-dark mt-auto"
            onClick={() => updatedes(data.description, data.id)}
          >
            {data.button}
          </button>
        )
      ) : (
        ""
      )}
      {data.button !== "View options" ? (
        <button
          class="btn btn-outline-dark mt-auto"
          onClick={() => removedes(data.id)}
        >
          Remove
        </button>
      ) : (
        ""
      )}
    </>
  );
}
