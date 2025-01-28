import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  message,
  Switch,
  Space,
  Card,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateBookingPage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [studentId, setStudentId] = useState<string>('')

  // Fetch required data
  const { data: courses } = Api.course.findMany.useQuery({})
  const { data: accommodations } = Api.accommodation.findMany.useQuery({})

  // Mutations
  const { mutateAsync: createStudent } = Api.student.create.useMutation()
  const { mutateAsync: createBooking } = Api.booking.create.useMutation()
  const { mutateAsync: createStudentCourse } =
    Api.studentCourse.create.useMutation()
  const { mutateAsync: createParent } = Api.parent.create.useMutation()
  const { mutateAsync: createBookingAccommodation } =
    Api.bookingAccommodation.create.useMutation()

  const verifyEduPort = async (values: any) => {
    // Simulated EduPort verification
    return {
      status: 'VERIFIED',
      registrationNumber: 'EDU' + Math.random().toString(36).substr(2, 9),
    }
  }

  const handleSubmit = async (values: any) => {
    try {
      // Create student
      const eduPortVerification = await verifyEduPort(values)
      const student = await createStudent({
        data: {
          name: values.studentName,
          email: values.studentEmail,
          phone: values.studentPhone,
          eduportStatus: eduPortVerification.status,
          registrationNumber: eduPortVerification.registrationNumber,
        },
      })
      setStudentId(student.id)

      // Create parent
      await createParent({
        data: {
          name: values.parentName,
          email: values.parentEmail,
          phone: values.parentPhone,
          studentId: student.id,
        },
      })

      // Create booking
      const booking = await createBooking({
        data: {
          bookingFee: values.bookingFee.toString(),
          status: 'PENDING',
          scholarshipPreference: values.scholarshipPreference,
          studentId: student.id,
          userId: values.userId,
        },
      })

      // Create student course
      await createStudentCourse({
        data: {
          status: 'ENROLLED',
          studentId: student.id,
          courseId: values.courseId,
        },
      })

      // Create booking accommodation if selected
      if (values.accommodationId) {
        await createBookingAccommodation({
          data: {
            status: 'PENDING',
            bookingId: booking.id,
            accommodationId: values.accommodationId,
          },
        })
      }

      message.success('Booking created successfully!')
      navigate(`/bookings/${booking.id}`)
    } catch (error) {
      message.error('Error creating booking')
      console.error(error)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-calendar-plus"></i> Create New Booking
        </Title>
        <Text>Create a new student booking by filling out the form below.</Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          <Title level={4}>
            <i className="las la-user-graduate"></i> Student Information
          </Title>
          <Form.Item
            name="studentName"
            label="Student Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="studentEmail"
            label="Student Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="studentPhone"
            label="Student Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Title level={4}>
            <i className="las la-user-friends"></i> Parent Information
          </Title>
          <Form.Item
            name="parentName"
            label="Parent Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="parentEmail"
            label="Parent Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="parentPhone"
            label="Parent Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Title level={4}>
            <i className="las la-book"></i> Course Selection
          </Title>
          <Form.Item
            name="courseId"
            label="Select Course"
            rules={[{ required: true }]}
          >
            <Select>
              {courses?.map(course => (
                <Select.Option key={course.id} value={course.id}>
                  {course.name} ({course.duration} months)
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Title level={4}>
            <i className="las la-home"></i> Accommodation
          </Title>
          <Form.Item name="accommodationId" label="Select Accommodation">
            <Select allowClear>
              {accommodations?.map(accommodation => (
                <Select.Option key={accommodation.id} value={accommodation.id}>
                  {accommodation.name} - {accommodation.type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Title level={4}>
            <i className="las la-money-bill"></i> Booking Details
          </Title>
          <Form.Item
            name="bookingFee"
            label="Booking Fee"
            rules={[{ required: true }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>

          <Form.Item
            name="scholarshipPreference"
            label="Scholarship Preference"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                <i className="las la-save"></i> Create Booking
              </Button>
              <Button onClick={() => navigate('/bookings')}>
                <i className="las la-times"></i> Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
