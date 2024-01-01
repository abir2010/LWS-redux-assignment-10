import AdminAssignmentMarksListItem from "./AdminAssignmentMarksListItem";

export default function AdminAssignmentMarksList() {
  return (
    <tbody className="divide-y divide-slate-600/50">
      <AdminAssignmentMarksListItem />
      <AdminAssignmentMarksListItem />
      <AdminAssignmentMarksListItem />
      <AdminAssignmentMarksListItem />
    </tbody>
  );
}
