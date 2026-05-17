import auraThumb from '../assets/projects/aura.svg'
import carRentalThumb from '../assets/projects/car-rental.svg'
import hydromateThumb from '../assets/projects/hydromate.svg'

export type Project = {
  id: string
  title: string
  thumbnail: string
  stack: string[]
  github: string
  demo?: string
  impact: string
  problem: string
  solution: string
  technologies: string
  challenges: string
  results: string
  learned: string
  featured?: boolean
}

const github = 'https://github.com/Gabriel-HP415'

export const projects: Project[] = [
  {
    id: 'aura',
    title: 'AURA — Hệ thống Sàng lọc Sức khỏe Mạch máu Võng mạc',
    thumbnail: auraThumb,
    stack: ['Microservices', 'AI/ML', 'Java', 'Spring Boot', 'Docker'],
    github,
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
    title: '🚗 Website Thuê Xe Tự Lái Online',
    thumbnail: carRentalThumb,
    stack: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github,
    impact:
      'Website quản lý cho thuê xe tự lái với đầy đủ chức năng đặt xe, thanh toán online và đánh giá.',
    problem:
      'Cửa hàng cho thuê cần một hệ thống thống nhất quản lý xe, đặt chỗ và thanh toán thay vì sổ sách và gọi điện.',
    solution:
      'Xây dựng API backend cho đội xe, đặt xe, thanh toán; frontend tìm kiếm, đặt lịch và module đánh giá.',
    technologies: 'Spring Boot, JPA, MySQL, React, REST, phân quyền admin và khách hàng.',
    challenges: 'Tránh trùng lịch đặt xe, mô hình hóa kỳ thuê và xác thực trạng thái thanh toán.',
    results: 'Triển khai luồng chính: xem xe, đặt ngày, thanh toán online và đánh giá sau thuê.',
    learned: 'Mô hình nghiệp vụ (lịch trống + vòng đời booking) quan trọng hơn CRUD đơn thuần.',
    featured: true,
  },
  {
    id: 'hydromate',
    title: '💧 HydroMate — Nhắc nhở & Theo dõi Uống nước',
    thumbnail: hydromateThumb,
    stack: ['Kotlin', 'Android', 'Room', 'MVVM'],
    github,
    demo: 'https://www.figma.com/design/JN0qfdtBa8DQmStykPkG8H/LTTBDiDong?node-id=0-1',
    impact:
      'Ứng dụng Android (Kotlin) nhắc nhở uống nước thông minh, theo dõi lượng nước và gợi ý mục tiêu theo cá nhân — đồ án tốt nghiệp.',
    problem:
      'Người dùng khó duy trì thói quen uống đủ nước; app báo thức thông thường không thích ứng thói quen hay hiển thị tiến độ rõ ràng.',
    solution:
      'Ứng dụng Kotlin: nhắc nhở theo lịch, ghi nhận lượng nước (cốc/chai), biểu đồ ngày/tuần/tháng và gợi ý mục tiêu theo cân nặng, tuổi, giới.',
    technologies:
      'Kotlin, Android SDK, Room/SQLite, MVVM, Notification, Material UI theo thiết kế Figma.',
    challenges:
      'Thông báo nền ổn định, lưu lịch sử lâu dài và quản lý state cho biểu đồ thống kê.',
    results:
      'Hoàn thành phạm vi đồ án: nhắc nhở, dashboard theo dõi, gợi ý lượng nước và tin nhắn động viên.',
    learned: 'Ứng dụng mobile cần thiết kế dữ liệu local vững trước khi thêm tính năng “thông minh”.',
    featured: true,
  },
]
