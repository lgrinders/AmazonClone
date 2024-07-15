export default function SignInFooter() {
  return (
    <>
      <div className="h-52 bg-white min-w-[1000px] py-10">
        <div className="rounded-md border-2 border-neutral-200 flex flex-col items-center justify-center gap-1 p-8">
            <h2 className="text-sm">See personalized recommendations</h2>
            <button className="w-64 bg-gradient-to-t from-SearchYellow to-cartYellow border border-SearchYellow font-semibold rounded-md py-1 text-sm">Sign in</button>
            <div className="flex text-xs gap-1">
                <p className="font-semibold">New customer?</p>
                <a className="hover:text-blue-500" href="#">Start here.</a>
            </div>
        </div>
      </div>
    </>
  );
}
