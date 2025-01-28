import { Typography, Card, Row, Col, Statistic, Table, Button } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch user's bookings with student details
  const { data: bookings, isLoading } = Api.booking.findMany.useQuery({
    where: { userId: user?.id },
    include: { student: true },
    orderBy: { createdAt: 'desc' },
  })

  // Calculate quick statistics
  const totalBookings = bookings?.length || 0
  const pendingBookings =
    bookings?.filter(b => b.status === 'PENDING').length || 0
  const confirmedBookings =
    bookings?.filter(b => b.status === 'CONFIRMED').length || 0

  // Table columns configuration
  const columns = [
    {
      title: 'Student Name',
      dataIndex: ['student', 'name'],
      key: 'studentName',
    },
    {
      title: 'Booking Fee',
      dataIndex: 'bookingFee',
      key: 'bookingFee',
      render: (fee: string) => `₹${fee}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Text
          style={{
            color:
              status === 'CONFIRMED'
                ? '#52c41a'
                : status === 'PENDING'
                ? '#faad14'
                : '#f5222d',
          }}
        >
          {status}
        </Text>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => dayjs(date).format('DD/MM/YYYY'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button type="link" onClick={() => navigate(`/bookings/${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={2}>
            <i
              className="las la-tachometer-alt"
              style={{ marginRight: '8px' }}
            ></i>
            My Bookings Dashboard
          </Title>
          <Text type="secondary">
            View and manage your recent bookings and their current status
          </Text>
        </div>

        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Bookings"
                value={totalBookings}
                prefix={<i className="las la-book"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Pending Bookings"
                value={pendingBookings}
                prefix={<i className="las la-clock"></i>}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Confirmed Bookings"
                value={confirmedBookings}
                prefix={<i className="las la-check-circle"></i>}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
        </Row>

        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title level={4}>Recent Bookings</Title>
          <Button
            type="primary"
            icon={<i className="las la-plus"></i>}
            onClick={() => navigate('/bookings/create')}
          >
            Create New Booking
          </Button>
        </div>

        <Card>
          <Table
            columns={columns}
            dataSource={bookings}
            loading={isLoading}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
