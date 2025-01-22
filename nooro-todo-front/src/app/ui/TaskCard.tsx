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
      <div className="bg-gray-500 rounded-3xl w-full px-8 py-3 max-w-[500px] text-white">
        <div className="flex p-4">
            <Checkbox></Checkbox>
          <h3 className="text-sm font-medium">{title}</h3>
          {children}
        </div>
      </div>
    );
  }

  export default TaskCard;