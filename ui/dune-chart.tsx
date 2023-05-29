export function DuneChart({ title, url }: { title: string; url: string }) {
  return (
    <div className={"card h-fit w-full bg-base-100 p-6 shadow-xl"}>
      <div className="flex items-center gap-2">
        <div className={`text-xl font-semibold`}>{title}</div>
      </div>
      <div className="divider mt-2" />
      <div className="w-full bg-base-100  pb-6">
        <div className="w-full overflow-x-auto">
          <iframe height={250} width={480} src={url}></iframe>
        </div>
      </div>
    </div>
  );
}
