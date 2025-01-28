import { Typography, Table, Input, DatePicker, Select, Space, Card } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AllBookingsPage() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const [dateFilter, setDateFilter] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  // Fetch bookings with included relations
  const { data: bookings, isLoading } = Api.booking.findMany.useQuery({
    include: {
      student: true,
      user: true,
    },
  })

  // Filter bookings based on search and filters
  const filteredBookings = bookings?.filter(booking => {
    const matchesSearch =
      !searchText ||
      booking.student?.name.toLowerCase().includes(searchText.toLowerCase()) ||
      booking.receiptNumber?.toLowerCase().includes(searchText.toLowerCase())

    const matchesDate =
      !dateFilter ||
      dayjs(booking.createdAt).format('YYYY-MM-DD') === dateFilter

    const matchesStatus = !statusFilter || booking.status === statusFilter

    return matchesSearch && matchesDate && matchesStatus
  })

  const columns = [
    {
      title: 'Receipt Number',
      dataIndex: 'receiptNumber',
      key: 'receiptNumber',
      render: (text: string) => <Text>{text || 'N/A'}</Text>,
    },
    {
      title: 'Student Name',
      dataIndex: ['student', 'name'],
      key: 'studentName',
    },
    {
      title: 'Booking Fee',
      dataIndex: 'bookingFee',
      key: 'bookingFee',
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
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <a onClick={() => navigate(`/bookings/${record.id}`)}>
            <i className="las la-eye" /> View
          </a>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-calendar-check" /> Bookings Management
          </Title>
          <Text type="secondary">
            View and manage all student bookings in one place
          </Text>
        </div>

        <Card>
          <Space style={{ marginBottom: 16 }} size="middle" wrap>
            <Search
              placeholder="Search by student name or receipt number"
              allowClear
              style={{ width: 300 }}
              onChange={e => setSearchText(e.target.value)}
            />
            <DatePicker
              onChange={date =>
                setDateFilter(date ? date.format('YYYY-MM-DD') : null)
              }
              placeholder="Filter by date"
            />
            <Select
              style={{ width: 200 }}
              placeholder="Filter by status"
              allowClear
              onChange={value => setStatusFilter(value)}
              options={[
                { value: 'PENDING', label: 'Pending' },
                { value: 'CONFIRMED', label: 'Confirmed' },
                { value: 'CANCELLED', label: 'Cancelled' },
              ]}
            />
          </Space>

          <Table
            columns={columns}
            dataSource={filteredBookings}
            loading={isLoading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: total => `Total ${total} bookings`,
            }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
