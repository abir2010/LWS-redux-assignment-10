import AdminAssignmentsListItem from "./AdminAssignmentsListItem";

export default function AdminAssignmentsList() {
  return (
    <tbody className="divide-y divide-slate-600/50">
      <AdminAssignmentsListItem />
      <AdminAssignmentsListItem />
      <AdminAssignmentsListItem />
    </tbody>
  );
}
