/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`container p-4 mx-auto max-w-screen-md`}>
      <div class={tw`flex justify-start content-center items-center`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class={tw`text-4xl ml-4`}>Simple Todo App</h1>
      </div>
      <div class={tw`my-4`}>
        <form>
          <div class={tw`flex justify-start flex-col my-2`}>
            <label for="title" class={tw`text-lg`}>Task Title</label>
            <input
              type="text"
              id="title"
              class={tw`border(2 solid rounded-ful) p-1`}
            />
          </div>
          <div class={tw`flex justify-start flex-col my-2`}>
            <label for="description" class={tw`text-lg`}>Task Description</label>
            <textarea id="description" class={tw`border(2 solid rounded-ful) rounded p-1`} />
          </div>
          <button class={tw`bg(amber-400 hover:amber-600 focus:amber-600) border(2 grey-500 solid rounded-full) px-4 py-2`}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
