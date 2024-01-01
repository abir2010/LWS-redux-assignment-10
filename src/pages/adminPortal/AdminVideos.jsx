import AdminVideosList from "../../components/admin/adminVideosList";

export default function AdminVideos() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <button className="btn ml-auto">Add Video</button>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
              <thead>
                <tr>
                  <th className="table-th">Video Title</th>
                  <th className="table-th">Description</th>
                  <th className="table-th">Action</th>
                </tr>
              </thead>
              <AdminVideosList />
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
