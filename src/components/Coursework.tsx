
import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Circle, CircleCheck } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Types for course data
interface Course {
  id: string;
  name: string;
  completed: boolean;
  grade?: string;
  credits: number;
  semester?: string;
}

interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

// Sample data for completed coursework
const mathCourses: CourseCategory = {
  id: "math",
  name: "Mathematics",
  courses: [
    {
      id: "calc1",
      name: "Calculus I",
      completed: true,
      grade: "A",
      credits: 4,
      semester: "Fall 2024"
    },
    {
      id: "calc2",
      name: "Calculus II",
      completed: true,
      grade: "A-",
      credits: 4,
      semester: "Spring 2025"
    },
    {
      id: "calc3",
      name: "Calculus III",
      completed: true,
      grade: "B+",
      credits: 4,
      semester: "Fall 2025"
    },
    {
      id: "diffeq",
      name: "Differential Equations",
      completed: false,
      credits: 3
    }
  ]
};

const courseCategories: CourseCategory[] = [
  mathCourses,
  {
    id: "cs",
    name: "Computer Science",
    courses: [
      {
        id: "cs1",
        name: "Introduction to Programming",
        completed: true,
        grade: "A",
        credits: 3,
        semester: "Fall 2024"
      },
      {
        id: "cs2",
        name: "Data Structures",
        completed: false,
        credits: 3
      }
    ]
  },
  {
    id: "engineering",
    name: "Engineering",
    courses: [
      {
        id: "eng1",
        name: "Digital Logic",
        completed: true,
        grade: "A-",
        credits: 3,
        semester: "Spring 2025"
      }
    ]
  }
];

const Coursework = () => {
  const [openCategory, setOpenCategory] = useState("math");
  const [activeTab, setActiveTab] = useState("all");

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? "" : categoryId);
  };

  // Calculate total credits
  const completedCredits = courseCategories.flatMap(cat => cat.courses)
    .filter(course => course.completed)
    .reduce((sum, course) => sum + course.credits, 0);
  
  const totalCredits = courseCategories.flatMap(cat => cat.courses)
    .reduce((sum, course) => sum + course.credits, 0);

  return (
    <section id="coursework" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="text-orange" />
          Coursework
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>

      <div className="mb-8">
        <div className="bg-granite border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Academic Progress</h3>
            <Badge variant="outline" className="text-orange border-orange">
              {completedCredits} / {totalCredits} Credits Completed
            </Badge>
          </div>
          
          <div className="mb-6">
            <div className="h-4 w-full bg-darkgray/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange transition-all duration-500 ease-in-out" 
                style={{ width: `${(completedCredits / totalCredits) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full bg-darkgray/50">
              <TabsTrigger value="all" className="flex-1">All Courses</TabsTrigger>
              <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
              <TabsTrigger value="inprogress" className="flex-1">In Progress</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {courseCategories.map((category) => {
          // Filter courses based on active tab
          const filteredCourses = category.courses.filter(course => {
            if (activeTab === "all") return true;
            if (activeTab === "completed") return course.completed;
            if (activeTab === "inprogress") return !course.completed;
            return true;
          });
          
          if (filteredCourses.length === 0) return null;
          
          return (
            <Collapsible 
              key={category.id}
              open={openCategory === category.id} 
              onOpenChange={() => toggleCategory(category.id)}
              className="mb-4"
            >
              <CollapsibleTrigger className="w-full">
                <div className="flex justify-between items-center p-6 bg-granite border border-gray-700 rounded-lg hover:border-orange/50 transition-all duration-300">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <Badge className="ml-3 bg-darkgray/70 text-orange">
                      {category.courses.filter(c => c.completed).length} / {category.courses.length}
                    </Badge>
                  </div>
                  {openCategory === category.id ? (
                    <ChevronUp className="text-orange" />
                  ) : (
                    <ChevronDown className="text-orange" />
                  )}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="bg-darkgray/30 border border-gray-700 border-t-0 rounded-b-lg p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Course Name</th>
                        <th className="py-3 px-4 text-left">Credits</th>
                        <th className="py-3 px-4 text-left">Grade</th>
                        <th className="py-3 px-4 text-left">Semester</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCourses.map((course) => (
                        <tr key={course.id} className="border-b border-gray-700/50">
                          <td className="py-3 px-4">
                            {course.completed ? (
                              <CircleCheck className="text-green-500" />
                            ) : (
                              <Circle className="text-gray-500" />
                            )}
                          </td>
                          <td className="py-3 px-4 font-medium">{course.name}</td>
                          <td className="py-3 px-4">{course.credits}</td>
                          <td className="py-3 px-4">{course.completed ? course.grade : "-"}</td>
                          <td className="py-3 px-4">{course.semester || "Upcoming"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
};

export default Coursework;
