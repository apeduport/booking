import {
  Typography,
  Input,
  Button,
  Form,
  message,
  Space,
  Card,
  Row,
  Col,
  Spin,
} from 'antd'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
type StudentWithDetails = Prisma.StudentGetPayload<{}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function StudentVerificationPage() {
  const [searchEmail, setSearchEmail] = useState('')
  const [searchRegNumber, setSearchRegNumber] = useState('')
  const [selectedStudent, setSelectedStudent] =
    useState<StudentWithDetails | null>(null)

  // Mutations
  const { mutateAsync: updateStudent } = Api.student.update.useMutation()

  // Search student by email
  const handleEmailSearch = async () => {
    try {
      const result = await Api.student.findFirst
        .useQuery({
          where: { email: searchEmail },
        })
        .refetch()

      if (result.data) {
        setSelectedStudent(result.data)
        message.success('Student found!')
      } else {
        message.warning('No student found with this email')
      }
    } catch (error) {
      message.error('Error searching student')
    }
  }

  // Validate registration number
  const handleRegNumberValidation = async () => {
    try {
      const result = await Api.student.findFirst
        .useQuery({
          where: { registrationNumber: searchRegNumber },
        })
        .refetch()

      if (result.data) {
        message.success('Registration number is valid!')
      } else {
        message.warning('Registration number not found')
      }
    } catch (error) {
      message.error('Error validating registration number')
    }
  }

  // Update registration number
  const handleUpdateRegNumber = async (newRegNumber: string) => {
    if (!selectedStudent) return

    try {
      await updateStudent({
        where: { id: selectedStudent.id },
        data: { registrationNumber: newRegNumber },
      })
      message.success('Registration number updated successfully!')
      setSelectedStudent({
        ...selectedStudent,
        registrationNumber: newRegNumber,
      })
    } catch (error) {
      message.error('Error updating registration number')
    }
  }

  // Generate unique ID
  const generateUniqueId = async () => {
    if (!selectedStudent) return

    try {
      const uniqueId = `STU-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`
      await updateStudent({
        where: { id: selectedStudent.id },
        data: { uniqueId },
      })
      message.success('Unique ID generated successfully!')
      setSelectedStudent({ ...selectedStudent, uniqueId })
    } catch (error) {
      message.error('Error generating unique ID')
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={14}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', padding: '24px' }}
          >
            <div>
              <Title level={2}>
                <i className="las la-user-check"></i> Student Verification
                Portal
              </Title>
              <Text>
                Verify and manage student information, registration numbers, and
                unique IDs.
              </Text>
            </div>

            <Card
              title={
                <>
                  <i className="las la-search"></i> Search Student
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input
                  placeholder="Enter student email"
                  value={searchEmail}
                  onChange={e => setSearchEmail(e.target.value)}
                  prefix={<i className="las la-envelope"></i>}
                />
                <Button type="primary" onClick={handleEmailSearch}>
                  <i className="las la-search"></i> Search
                </Button>
              </Space>
            </Card>

            {selectedStudent && (
              <Card
                title={
                  <>
                    <i className="las la-user"></i> Student Information
                  </>
                }
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Text strong>Name:</Text>
                  <Text>{selectedStudent.name}</Text>

                  <Text strong>Email:</Text>
                  <Text>{selectedStudent.email}</Text>

                  <Text strong>EduPort Status:</Text>
                  <Text>
                    {selectedStudent.eduportStatus || 'Not registered'}
                  </Text>

                  <Text strong>Registration Number:</Text>
                  <Text>
                    {selectedStudent.registrationNumber || 'Not assigned'}
                  </Text>

                  <Text strong>Unique ID:</Text>
                  <Text>{selectedStudent.uniqueId || 'Not generated'}</Text>

                  <Form layout="vertical">
                    <Form.Item label="Update Registration Number">
                      <Space>
                        <Input
                          placeholder="New registration number"
                          onPressEnter={e =>
                            handleUpdateRegNumber(e.currentTarget.value)
                          }
                        />
                        <Button type="primary">
                          <i className="las la-save"></i> Update
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>

                  <Button onClick={generateUniqueId} type="default">
                    <i className="las la-fingerprint"></i> Generate Unique ID
                  </Button>
                </Space>
              </Card>
            )}

            <Card
              title={
                <>
                  <i className="las la-check-circle"></i> Validate Registration
                  Number
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input
                  placeholder="Enter registration number"
                  value={searchRegNumber}
                  onChange={e => setSearchRegNumber(e.target.value)}
                  prefix={<i className="las la-id-card"></i>}
                />
                <Button type="primary" onClick={handleRegNumberValidation}>
                  <i className="las la-check"></i> Validate
                </Button>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
