
import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Circle, CircleCheck, CircuitBoard, Sparkles } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Types for course data
interface Course {
  id: string;
  name: string;
  completed: boolean;
  grade?: string;
  semester?: string;
  subject: string;
}

// Flatten all courses into a single array
const allCourses: Course[] = [
  // Mathematics courses
  {
    id: "calc1",
    name: "Calculus I",
    completed: true,
    grade: "A",
    semester: "Fall 2024",
    subject: "calculus"
  },
  {
    id: "calc2",
    name: "Calculus II",
    completed: true,
    grade: "C",
    semester: "Spring 2025",
    subject: "calculus"
  },
  {
    id: "calc3",
    name: "Calculus III",
    completed: true,
    grade: "A",
    semester: "Summer 2025",
    subject: "calculus"
  },
  {
    id: "diffeq",
    name: "Differential Equations",
    completed: false,
    subject: "calculus"
  },
  // Computer Science courses
  {
    id: "cs1",
    name: "Introduction to Programming I",
    completed: true,
    grade: "A",
    semester: "Fall 2024",
    subject: "programming"
  },
  {
    id: "cs2",
    name: "Introduction to Programming II",
    completed: true,
    grade: "B",
    semester: "Spring 2025",
    subject: "programming"
  },
  {
    id: "dsa",
    name: "Data Structures and Algorithms",
    completed: false,
    subject: "programming"
  },
  // Physics courses
  {
    id: "phys1",
    name: "Physics I",
    completed: false,
    subject: "physics"
  },
  // Circuits courses
  {
    id: "circuits1",
    name: "Intro to Circuits I",
    completed: false,
    subject: "circuits"
  }
];

const Coursework = () => {
  const [coursesOpen, setCoursesOpen] = useState(true);
  const [activeSubject, setActiveSubject] = useState("all");

  // Calculate total courses completed
  const completedCourses = allCourses
    .filter(course => course.completed)
    .length;
  
  const totalCourses = allCourses.length;

  // Filter courses based on active subject
  const filteredCourses = allCourses.filter(course => {
    if (activeSubject === "all") return true;
    return course.subject === activeSubject;
  });

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
        <Collapsible 
          open={coursesOpen} 
          onOpenChange={setCoursesOpen}
          className="mb-4"
        >
          <CollapsibleTrigger className="w-full">
            <div className="flex justify-between items-center p-6 bg-granite border border-gray-700 rounded-lg hover:border-orange/50 transition-all duration-300">
              <div className="flex items-center">
                <h3 className="text-xl font-bold">Academic Progress</h3>
                <Badge className="ml-3 bg-darkgray/70 text-orange">
                  {completedCourses} / {totalCourses} Courses
                </Badge>
              </div>
              {coursesOpen ? (
                <ChevronUp className="text-orange" />
              ) : (
                <ChevronDown className="text-orange" />
              )}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="bg-darkgray/30 border border-gray-700 border-t-0 rounded-b-lg p-6">
              <div className="mb-6">
                <div className="h-4 w-full bg-darkgray/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange transition-all duration-500 ease-in-out" 
                    style={{ width: `${(completedCourses / totalCourses) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="w-full mb-6">
                <ToggleGroup 
                  type="single" 
                  value={activeSubject}
                  onValueChange={(value) => value && setActiveSubject(value)}
                  className="justify-start bg-darkgray/50 p-1 rounded-md w-full"
                >
                  <ToggleGroupItem value="all" className="flex-1 data-[state=on]:bg-orange/20 data-[state=on]:text-orange">
                    All Courses
                  </ToggleGroupItem>
                  <ToggleGroupItem value="calculus" className="flex-1 data-[state=on]:bg-orange/20 data-[state=on]:text-orange">
                    Calculus
                  </ToggleGroupItem>
                  <ToggleGroupItem value="physics" className="flex-1 data-[state=on]:bg-orange/20 data-[state=on]:text-orange">
                    Physics
                  </ToggleGroupItem>
                  <ToggleGroupItem value="programming" className="flex-1 data-[state=on]:bg-orange/20 data-[state=on]:text-orange">
                    Programming
                  </ToggleGroupItem>
                  <ToggleGroupItem value="circuits" className="flex-1 data-[state=on]:bg-orange/20 data-[state=on]:text-orange">
                    Circuits
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Course Name</th>
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
                          <div className="flex items-center">
                            <Circle className="text-gray-500" />
                            <div className="relative ml-1">
                              <div className="absolute -top-3 -left-1">
                                <Sparkles className="text-orange h-4 w-4 animate-pulse" />
                              </div>
                              <div className="absolute w-20 h-10 bg-gradient-to-r from-orange/0 via-orange/20 to-orange/0 rounded-full blur-xl -top-5 -left-8 animate-pulse"></div>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 font-medium">
                        {!course.completed ? (
                          <div className="relative">
                            {course.name}
                            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 animate-pulse pointer-events-none"></div>
                          </div>
                        ) : (
                          course.name
                        )}
                      </td>
                      <td className="py-3 px-4">{course.completed ? course.grade : "-"}</td>
                      <td className="py-3 px-4">
                        {!course.completed ? (
                          <div className="relative">
                            <span className="text-orange-light font-medium">Currently Taking</span>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/0 via-orange/50 to-orange/0 rounded"></div>
                          </div>
                        ) : (
                          course.semester
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default Coursework;
