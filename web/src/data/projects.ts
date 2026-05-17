import auraThumbFallback from '../assets/projects/aura.svg'
import carRentalThumbFallback from '../assets/projects/car-rental.svg'
import hydromateThumbFallback from '../assets/projects/hydromate.svg'
import realtimeChatThumbFallback from '../assets/projects/realtime-chat.svg'
import skincareThumbFallback from '../assets/projects/skincare.svg'
import { publicAsset } from '../lib/assetUrl'

export type Project = {
  id: string
  title: string
  thumbnail: string
  thumbnailFallback: string
  stack: string[]
  github?: string
  demo?: string
  inProgress?: boolean
  impact: string
  problem: string
  solution: string
  technologies: string
  challenges: string
  results: string
  learned: string
  featured?: boolean
}

export const projectThumbFallbacks: Record<string, string> = {
  aura: auraThumbFallback,
  'car-rental': carRentalThumbFallback,
  messzola: realtimeChatThumbFallback,
  hydromate: hydromateThumbFallback,
  skincare: skincareThumbFallback,
}

export const projects: Project[] = [
  {
    id: 'aura',
    title: 'AURA — Hệ thống Sàng lọc Sức khỏe Mạch máu Võng mạc',
    thumbnail: publicAsset('images/projects/aura.jpg'),
    thumbnailFallback: auraThumbFallback,
    stack: ['Microservices', 'AI/ML', 'Java', 'Spring Boot', 'Docker'],
    github: 'https://github.com/IT-JuanDoo/AURA-Retinal-Screening-System',
    impact:
      'Hệ thống sàng lọc và phân tích sức khỏe mạch máu võng mạc sử dụng AI, được xây dựng với kiến trúc Microservices.',
    problem:
      'Sàng lọc võng mạc thủ công tốn thời gian, khó mở rộng; một monolith khó tách xử lý AI, dữ liệu bệnh nhân và báo cáo.',
    solution:
      'Thiết kế microservices cho tiếp nhận ảnh, phân tích AI và báo cáo với API rõ ràng và xử lý bất đồng bộ cho inference.',
    technologies:
      'Microservices, REST API, tích hợp pipeline AI, Docker, cơ sở dữ liệu cho hồ sơ sàng lọc.',
    challenges:
      'Phân ranh giới service, quản lý job AI chạy lâu và đồng bộ luồng dữ liệu giữa các service.',
    results:
      'Hoàn thiện luồng sàng lọc từ upload ảnh đến kết quả phân tích sức khỏe mạch máu võng mạc.',
    learned: 'Microservices phù hợp khi AI, dữ liệu và giao diện có nhu cầu scale và release khác nhau.',
    featured: true,
  },
  {
    id: 'car-rental',
    title: '🚗 CarRental — Website Thuê Xe Tự Lái',
    thumbnail: publicAsset('images/projects/car-rental.jpg'),
    thumbnailFallback: carRentalThumbFallback,
    stack: ['PHP', 'MySQL', 'Tailwind CSS', 'VNPAY'],
    github: 'https://github.com/Gabriel-HP415/laptrinhweb',
    impact:
      'Website cho thuê xe tự lái: đặt xe, thanh toán VNPAY, đánh giá; user vừa thuê vừa đăng xe cho thuê.',
    problem:
      'Thiếu nền tảng tập trung cho đặt xe, kiểm tra trùng lịch và thanh toán; admin/host/user cần phân quyền rõ.',
    solution:
      'CarRental (đồ án Lập trình Web): module client, host dashboard, admin; kiểm tra lịch realtime, tự hủy đơn chưa thanh toán.',
    technologies:
      'PHP 7.4+, MySQL, Tailwind CSS, JavaScript, VNPAY Sandbox, FullCalendar, Chart.js, Apache/XAMPP.',
    challenges:
      'Trùng lịch đặt xe, upload nhiều ảnh/xe, session auth và phân quyền user/host/admin.',
    results:
      'Luồng đầy đủ: tìm xe → đặt → VNPAY → đánh giá; host quản lý xe & doanh thu; admin giám sát hệ thống.',
    learned: 'Mô hình booking + payment state machine quan trọng hơn CRUD đơn thuần trên PHP thuần.',
    featured: true,
  },
  {
    id: 'messzola',
    title: '💬 MessZola — App Nhắn Tin Real-Time',
    thumbnail: publicAsset('images/projects/messzola.jpg'),
    thumbnailFallback: realtimeChatThumbFallback,
    stack: ['Node.js', 'Express', 'WebSocket', 'WebRTC'],
    github: 'https://github.com/Gabriel-HP415/laptrinhmang-CuoiKy',
    impact:
      'Ứng dụng chat thời gian thực (đồ án Lập trình Mạng): nhắn 1-1/nhóm, gọi video, gửi file, typing indicator.',
    problem:
      'Cần demo đầy đủ kiến thức mạng: HTTP REST, WebSocket, peer connection và lưu trữ tin nhắn bền vững.',
    solution:
      'MessZola: backend Express + WS + WebRTC; frontend SPA; sql.js (SQLite in-memory + file persistence).',
    technologies:
      'Node.js, Express, WebSocket, WebRTC, JWT, sql.js, HTML/CSS/JS, kiến trúc feature-based (server/web).',
    challenges:
      'Reconnect WS, đồng bộ room/chat, signaling cho gọi video nhiều người và cache UX phía client.',
    results:
      'Chat 1-1/nhóm, quản lý bạn bè, gọi video (mic/camera/screen share), gửi file trong khung chat.',
    learned: 'Real-time app cần tách rõ REST, WS events và RTC signaling — contract rõ từng kênh.',
    featured: true,
  },
  {
    id: 'hydromate',
    title: '💧 HydroMate — Nhắc nhở & Theo dõi Uống nước',
    thumbnail: publicAsset('images/projects/hydromate.jpg'),
    thumbnailFallback: hydromateThumbFallback,
    stack: ['Kotlin', 'Android', 'Room', 'MVVM'],
    github: 'https://github.com/JunnDung/HydroMate',
    demo: 'https://www.figma.com/design/JN0qfdtBa8DQmStykPkG8H/LTTBDiDong?node-id=0-1',
    impact:
      'Ứng dụng Android (Kotlin) nhắc nhở uống nước thông minh, theo dõi lượng nước và gợi ý mục tiêu — đồ án LTTBĐ.',
    problem:
      'Người dùng khó duy trì thói quen uống đủ nước; app báo thức thông thường không thích ứng thói quen.',
    solution:
      'Nhắc nhở theo lịch, ghi nhận lượng nước, biểu đồ ngày/tuần/tháng, gợi ý mục tiêu theo profile.',
    technologies:
      'Kotlin, Android SDK, Room/SQLite, MVVM, Notification, Material UI theo Figma.',
    challenges: 'Thông báo nền ổn định, lưu lịch sử và state cho biểu đồ thống kê.',
    results:
      'Hoàn thành đồ án nhóm: nhắc nhở, dashboard, gợi ý lượng nước và tin nhắn động viên.',
    learned: 'Mobile cần thiết kế dữ liệu local vững trước khi thêm tính năng “thông minh”.',
    featured: true,
  },
  {
    id: 'skincare',
    title: '🧴 Skin Care Service Management System',
    thumbnail: publicAsset('images/projects/skincare.jpg'),
    thumbnailFallback: skincareThumbFallback,
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST'],
    inProgress: true,
    impact:
      'Hệ thống quản lý dịch vụ chăm sóc da: lịch hẹn, gói dịch vụ, khách hàng và nhân viên — đang phát triển.',
    problem:
      'Spa/clinic cần một hệ thống thống nhất thay vì sổ hẹn và Excel cho khách, dịch vụ và lịch làm việc.',
    solution:
      'Thiết kế module quản lý dịch vụ, đặt lịch, hồ sơ khách và phân quyền staff/admin (đang triển khai).',
    technologies: 'Spring Boot, MySQL, REST API, JPA — kiến trúc backend-first.',
    challenges: 'Mô hình lịch hẹn trùng ca, gói dịch vụ combo và workflow trạng thái đơn dịch vụ.',
    results: 'Đã hoàn thành phần thiết kế & scaffold; các module nghiệp vụ đang được bổ sung.',
    learned: 'Ưu tiên domain model (appointment + service catalog) trước khi làm UI chi tiết.',
    featured: true,
  },
]
