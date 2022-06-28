/** @format */
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "../inputOption/InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  addDoc,
  serverTimestamp,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState<{ id: string; data: DocumentData }[]>([]);
  const postsColection = collection(db, "posts");
  const q = query(postsColection, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addDoc(postsColection, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9"
          ></InputOption>
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          ></InputOption>
          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="#C0CBCD"
          ></InputOption>
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          ></InputOption>
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
