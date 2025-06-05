'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Search, ArrowLeft } from 'lucide-react';
import { reactQAData, searchQuestions, getTotalQuestions } from '@/app/data/react';

export default function ReactPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  // Lọc dữ liệu dựa trên search query
  const filteredData = searchQuery.trim() ? searchQuestions(searchQuery) : reactQAData;

  const toggleExpanded = id => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredData.map(item => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Animated bouncing ball image */}
      <div className="fixed top-8 right-8 z-20">
        <div className="bouncing-ball">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm bg-white/20">
            <img
              src="https://res.cloudinary.com/dfizo8h6h/image/upload/v1748937840/image_-_Copy_mkjx21.png"
              alt="Bouncing ball"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-indigo-300/40 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 backdrop-blur-sm bg-white/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
          <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              React Interview Questions
            </h1>
            <p className="text-gray-700">
              Tổng cộng {getTotalQuestions()} câu hỏi
              {searchQuery && ` - Tìm thấy ${filteredData.length} kết quả`}
            </p>
          </div>
        </div>

        {/* Search và Controls */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Tìm kiếm câu hỏi..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 backdrop-blur-sm bg-white/80 border-white/30 focus:bg-white focus:border-blue-300 transition-all duration-200"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={expandAll}
              className="backdrop-blur-sm bg-white/80 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            >
              Mở rộng tất cả
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={collapseAll}
              className="backdrop-blur-sm bg-white/80 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
            >
              Thu gọn tất cả
            </Button>
            <Badge
              variant="secondary"
              className="ml-auto backdrop-blur-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            >
              {expandedItems.size} / {filteredData.length} đang mở
            </Badge>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <Card className="backdrop-blur-sm bg-white/80 border-white/30 shadow-xl">
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Không tìm thấy câu hỏi nào phù hợp.</p>
              </CardContent>
            </Card>
          ) : (
            filteredData.map((item, index) => {
              const isExpanded = expandedItems.has(item.id);

              return (
                <Card
                  key={item.id}
                  className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] backdrop-blur-sm bg-white/80 border-white/30 hover:bg-white/90"
                >
                  <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(item.id)}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                          >
                            #{index + 1}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-left bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {item.question}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-100 transition-all duration-200"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
                      <div className="border-t pt-4 border-gradient-to-r from-blue-200 to-purple-200">
                        <div className="prose prose-sm max-w-none">
                          <div className="text-gray-700 whitespace-pre-line mb-4 leading-relaxed">
                            {item.answer}
                          </div>

                          {item.codeExample && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                Code Example:
                              </h4>
                              <pre className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl overflow-x-auto text-sm border border-gray-200 shadow-inner">
                                <code className="text-gray-800">{item.codeExample}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30 inline-block">
            <p className="text-gray-700 font-medium">
              Tổng cộng <span className="text-blue-600 font-bold">{filteredData.length}</span> câu
              hỏi được hiển thị
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for bouncing ball animation */}
      <style jsx>{`
        .bouncing-ball {
          animation: bouncingBall 6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes bouncingBall {
          0% {
            transform: translateY(0px) translateX(0px);
            animation-timing-function: ease-in;
          }

          /* Rơi xuống */
          25% {
            transform: translateY(calc(100vh - 120px)) translateX(0px);
            animation-timing-function: ease-out;
          }

          /* Nảy lần 1 - cao */
          30% {
            transform: translateY(calc(100vh - 200px)) translateX(0px);
            animation-timing-function: ease-in;
          }

          /* Chạm đất lần 2 */
          35% {
            transform: translateY(calc(100vh - 120px)) translateX(0px);
            animation-timing-function: ease-out;
          }

          /* Nảy lần 2 - thấp hơn */
          38% {
            transform: translateY(calc(100vh - 160px)) translateX(0px);
            animation-timing-function: ease-in;
          }

          /* Chạm đất lần 3 */
          41% {
            transform: translateY(calc(100vh - 120px)) translateX(0px);
            animation-timing-function: ease-out;
          }

          /* Nảy lần 3 - rất thấp */
          43% {
            transform: translateY(calc(100vh - 140px)) translateX(0px);
            animation-timing-function: ease-in;
          }

          /* Dừng ở đáy một chút */
          45% {
            transform: translateY(calc(100vh - 120px)) translateX(0px);
          }

          /* Bắt đầu bay về vị trí ban đầu */
          70% {
            transform: translateY(calc(100vh - 120px)) translateX(0px);
            animation-timing-function: ease-in;
          }

          100% {
            transform: translateY(0px) translateX(0px);
            animation-timing-function: ease-out;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .bouncing-ball {
            right: 1rem;
          }

          @keyframes bouncingBall {
            0% {
              transform: translateY(0px) translateX(0px);
              animation-timing-function: ease-in;
            }

            25% {
              transform: translateY(calc(100vh - 100px)) translateX(0px);
              animation-timing-function: ease-out;
            }

            30% {
              transform: translateY(calc(100vh - 160px)) translateX(0px);
              animation-timing-function: ease-in;
            }

            35% {
              transform: translateY(calc(100vh - 100px)) translateX(0px);
              animation-timing-function: ease-out;
            }

            38% {
              transform: translateY(calc(100vh - 130px)) translateX(0px);
              animation-timing-function: ease-in;
            }

            41% {
              transform: translateY(calc(100vh - 100px)) translateX(0px);
              animation-timing-function: ease-out;
            }

            43% {
              transform: translateY(calc(100vh - 115px)) translateX(0px);
              animation-timing-function: ease-in;
            }

            45% {
              transform: translateY(calc(100vh - 100px)) translateX(0px);
            }

            70% {
              transform: translateY(calc(100vh - 100px)) translateX(0px);
              animation-timing-function: ease-in;
            }

            100% {
              transform: translateY(0px) translateX(0px);
              animation-timing-function: ease-out;
            }
          }
        }
      `}</style>
    </div>
  );
}
