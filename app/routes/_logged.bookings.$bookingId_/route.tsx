import {
  Typography,
  Card,
  Descriptions,
  Tag,
  Space,
  Button,
  Row,
  Col,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BookingDetailsPage() {
  const { bookingId } = useParams()

  const { data: booking } = Api.booking.findFirst.useQuery({
    where: { id: bookingId },
    include: {
      student: {
        include: {
          parents: true,
        },
      },
      bookingAccommodations: {
        include: {
          accommodation: true,
        },
      },
      user: true,
    },
  })

  if (!booking) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Title level={4}>Loading booking details...</Title>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2}>
              <i className="las la-info-circle"></i> Booking Details
            </Title>
            <Text type="secondary">
              Complete information about the booking and student
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card
                title={
                  <>
                    <i className="las la-user-graduate"></i> Student Information
                  </>
                }
              >
                <Descriptions column={1}>
                  <Descriptions.Item label="Name">
                    {booking.student?.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {booking.student?.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone">
                    {booking.student?.phone || 'N/A'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Alternate Number">
                    {booking.student?.alternateNumber || 'N/A'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Registration Number">
                    {booking.student?.registrationNumber || 'Not registered'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Eduport Status">
                    <Tag
                      color={
                        booking.student?.eduportStatus === 'VERIFIED'
                          ? 'green'
                          : 'orange'
                      }
                    >
                      {booking.student?.eduportStatus || 'PENDING'}
                    </Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card
                title={
                  <>
                    <i className="las la-file-invoice"></i> Booking Information
                  </>
                }
              >
                <Descriptions column={1}>
                  <Descriptions.Item label="Booking Fee">
                    {booking.bookingFee}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status">
                    <Tag
                      color={booking.status === 'CONFIRMED' ? 'green' : 'blue'}
                    >
                      {booking.status}
                    </Tag>
                  </Descriptions.Item>
                  <Descriptions.Item label="Receipt Number">
                    {booking.receiptNumber || 'Not generated'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Scholarship Preference">
                    {booking.scholarshipPreference ? 'Yes' : 'No'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Created At">
                    {dayjs(booking.createdAt).format('MMMM D, YYYY')}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>

            <Col xs={24}>
              <Card
                title={
                  <>
                    <i className="las la-building"></i> Accommodation Selections
                  </>
                }
              >
                {booking.bookingAccommodations?.map(ba => (
                  <Tag key={ba.id} color="blue" style={{ margin: '4px' }}>
                    {ba.accommodation?.name} - {ba.status}
                  </Tag>
                ))}
              </Card>
            </Col>

            <Col xs={24}>
              <Card
                title={
                  <>
                    <i className="las la-users"></i> Parent Information
                  </>
                }
              >
                {booking.student?.parents?.map(parent => (
                  <Descriptions
                    key={parent.id}
                    column={1}
                    style={{ marginBottom: '16px' }}
                  >
                    <Descriptions.Item label="Name">
                      {parent.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                      {parent.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Phone">
                      {parent.phone || 'N/A'}
                    </Descriptions.Item>
                    <Descriptions.Item label="Alternate Number">
                      {parent.alternateNumber || 'N/A'}
                    </Descriptions.Item>
                  </Descriptions>
                ))}
              </Card>
            </Col>
          </Row>

          {booking.receiptNumber && (
            <div style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                icon={<i className="las la-file-download"></i>}
              >
                Download Receipt
              </Button>
            </div>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
