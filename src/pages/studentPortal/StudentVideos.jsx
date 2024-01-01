import VideosList from "../../components/student/VideosList";
import Navbar from "../../components/ui/Navbar";
import VideoFrame from "./../../components/student/VideoFrame";

export default function StudentVideos() {
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <VideoFrame />
            <VideosList />
          </div>
        </div>
      </section>
    </>
  );
}
