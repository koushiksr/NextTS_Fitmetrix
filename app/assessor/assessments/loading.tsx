// loading component for assessments page

export default function Loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="border-8 border-t-transparent border-blue-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
      </div>
    </div>
  );
}
