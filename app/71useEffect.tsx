"use client";
import { useEffect, useReducer } from "react";

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: "initialize";
      name: string;
    }
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };

type Person = {
  name: string;
};

// function reducer(state: State, action: Action): State {
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "initialize":
      return { name: action.name, score: 0, loading: false };
    case "increment":
      return { ...state, score: state.score + 1 };
    case "decrement":
      return { ...state, score: state.score - 1 };
    case "reset":
      return { ...state, score: 0 };
    default:
      return state;
  }
};

const getPerson: Promise<Person> = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob" }), 1000)
  );
};

const PersonScore = () => {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  useEffect(() => {
    getPerson().then(({ name }) => dispatch({ type: "initialize", name }));
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3 className="text-3xl">
        {name}, {score}
      </h3>

      <button
        className="text-white bg-blue-500 hover:bg-blue-800 rounded-lg  px-5 py-2.5 me-5"
        onClick={() => dispatch({ type: "increment" })}
      >
        Add
      </button>
      <button
        className="text-white bg-blue-500 hover:bg-blue-800 rounded-lg  px-5 py-2.5 me-5"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Subtract
      </button>
      <button
        className="text-white bg-blue-500 hover:bg-blue-800 rounded-lg  px-5 py-2.5 me-5"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="text-2xl m-8">
      <PersonScore />
    </div>
  );
}
