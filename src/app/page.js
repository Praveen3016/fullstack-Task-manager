import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "home: Work manager",
};

export default function Home() {

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center ">
      <div className="m-5 ">
        <h4 className="text-white opacity-75 text-center">Welcome User</h4>
        <p className="text-white opacity-75 text-center" > Work book is a Next.js full stack project that revolutionizes task management with seamless login authentication. Leveraging MongoDB Atlas as the cornerstone of our database architecture, users can effortlessly add, remove, and update tasks, empowering productivity with unparalleled ease and efficiency. </p>
        <div className="d-flex w-100 gap-2 justify-content-center">
          <Link href='add-task'><button className="btn btn-primary">Add Task</button></Link>
          <Link href='show-task'><button className="btn btn-primary">Show Task</button></Link>
         </div>
      </div>

    </div>
  );
}
