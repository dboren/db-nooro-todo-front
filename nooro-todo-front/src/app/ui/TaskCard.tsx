export function Card({
    title,
    // color,
    completed,
  }: {
    title: string;
    valcolor: string;
    completed: boolean;
  }) {
    
  //Not sure how color is meant to be implemented here based on the figma images provided

    return (
      <div className="rounded-xl bg-gray-50 p-2">
        <div className="flex p-4">
            {/* checkbubble */}
          <h3 className="text-sm font-medium">{title}</h3>
          {/* delete button */}
        </div>
      </div>
    );
  }