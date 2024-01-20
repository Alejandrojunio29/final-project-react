import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CreatePost() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify({
        date: data.date,
        hashtag1: data.hashtag1,
        hashtag2: data.hashtag2,
        hashtag3: data.hashtag3,
        hashtag4: data.hashtag4,
        postContent: data.postContent,
        postImg: data.postImg,
        timeToRead: data.timeToRead,
        title: data.title,
        userImg: data.userImg,
        userName: data.userName,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let dataTest = await response.json();
    console.log("inf data", dataTest.data);
    if (response.ok) {
      navigate("/");
    } else {
      alert("Something was wrong");
    }
  }

  return (
    <>
      <nav className="flex flex-row justify-around bg-stone-100 pb-2 pt-2 gap-3">
        <div className=" flex ps-56 gap-2">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            className="w-12 cursor-pointer  "
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="text-md font-semibold pt-3">Create Post</h1>
        </div>
        <div className="flex ps-64 gap-2">
          <div className="ps-24">
            <button className="btn bg-transparent  border-transparent hover:text-indigo-500 hover:bg-blue-200/100">
              Edit
            </button>
            <button className="btn bg-transparent border-transparent hover:text-indigo-500 hover:bg-blue-200/100">
              Preview
            </button>
          </div>
        </div>
        <div className="ps-16 pt-2 ">
          <img
            src="https://img.icons8.com/ios-filled/50/x.png"
            alt=""
            className="w-4 h-4 hover:bg-blue-300"
          />
        </div>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="  flex flex-wrap justify-center bg-stone-100">
          <div className="flex   justify-center border ">
            <div className=" h-screen bg-white phone-3 rounded-md">
              <div className="flex flex-col    gap-4 pt-8 pb-6 ps-8">
                <input
                  type="text"
                  placeholder="UserName"
                  className="border input-xs w-60 text-lg shadow-md"
                  {...register("userName", {
                    required: { value: true, message: "UserName is required" },
                  })}
                />
                <input
                  type="text"
                  placeholder="Add a cover image"
                  className="border input-md w-60 text-lg shadow-md"
                  {...register("postImg", {
                    required: { value: true, message: "Image is required" },
                  })}
                />

                <input
                  type="text"
                  placeholder="New Post Title here..."
                  className="border-transparent shadow-none pe-4 input-lg text-6xl font-semibold focus:outline-none "
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Post title is required",
                    },
                  })}
                />
              </div>

              <div className="ps-8 flex pb-6 ">
                <div className="flex flex-col-4 flex-wrap">
                  <input
                    type="text"
                    placeholder="#hastag 1"
                    className="w-32 "
                    {...register("hashtag1", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="#hastag 2"
                    className="w-32 "
                    {...register("hashtag2", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="#hastag 3"
                    className="w-32 "
                    {...register("hashtag3", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="#hastag 4"
                    className="w-32 "
                    {...register("hashtag4", {
                      required: { value: true, message: "Hashtag is required" },
                    })}
                  />
                </div>
              </div>
              <div className="ps-8 pb-4 flex ">
                <input
                  type="text"
                  placeholder="Time to read"
                  className=" ps-2 w-32 border rounded"
                  {...register("timeToRead", {
                    required: {
                      value: true,
                      message: "Time to read is required",
                    },
                  })}
                />
              </div>
              <div
                id="emoticons"
                className="flex justify-around bg-stone-100 py-3"
              >
                <div className="flex gap-4 ">
                  <img
                    src="https://img.icons8.com/ios-filled/50/b.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/ios/50/instapaper.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/windows/32/attach.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/windows/32/bulleted-list.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/ios/50/todo-list--v1.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/50/h.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/quote-left.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/50/source-code.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/dotty/80/code--v2.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/external-febrian-hidayat-basic-outline-febrian-hidayat/24/external-thunderbolt-ui-essential-febrian-hidayat-basic-outline-febrian-hidayat.png"
                    alt=""
                    className="w-6"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/50/image.png"
                    alt=""
                    className="w-6"
                  />
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/menu-2.png"
                    alt=""
                    className="w-6"
                  />
                </div>
              </div>
              <textarea
                className="textarea w-full focus:outline-none focus:border-none "
                placeholder=""
                {...register("postContent", {
                  required: { value: true, message: "Content is required" },
                })}
              ></textarea>
            </div>
          </div>
        </main>
        <div className="flex  justify-center bg-stone-100">
          <div className="flex gap-4 pe-72 py-3 bg-stone-100">
            <button
              onClick={() => navigate(`/posts/${post._id}`)}
              className="btn btn-primary"
              type="submit"
              value={"POST"}
            >
              Publish
            </button>
            <button className="btn hover:bg-indigo-200 ">Save draft</button>
            <div className="pt-2">
              <img
                className="w-7 h-7 hover:bg-indigo-200"
                src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-nut-mechanic-repair-dreamstale-lineal-dreamstale.png"
                alt=""
              />
            </div>
            <button className="btn hover:bg-indigo-200 ">
              Revert new changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
