import {Checkbox} from "@heroui/checkbox"

export function TaskCard({
    title,
    color,
    completed,
    children
  }: {
    title: string;
    color: string;
    completed: boolean;
    children: React.ReactNode; 
  }) {
    
  //Not sure how color is meant to be implemented here based on the figma images provided

    return (
      <div className="rounded-xl bg-gray-50 p-2">
        <div className="flex p-4">
            <Checkbox></Checkbox>
          <h3 className="text-sm font-medium">{title}</h3>
          {children}
        </div>
      </div>
    );
  }

  export default TaskCard;