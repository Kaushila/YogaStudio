import React from 'react';
import { Typography, Card, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      testimonial:
        'John Doe has been incredibly helpful and knowledgeable. His insight has been invaluable to our project.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      testimonial:
        'Jane Smith is a dedicated professional. Her attention to detail and problem-solving abilities are outstanding.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
      testimonial:
        'Michael Johnson has a great work ethic and always brings a positive attitude to the team.',
    },
    {
      id: 4,
      name: 'Emily Brown',
      avatar: 'https://i.pravatar.cc/150?img=4',
      testimonial:
        'Emily Brown is a creative thinker and her designs have greatly enhanced our product.',
    },
    {
      id: 5,
      name: 'David Wilson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      testimonial:
        'David Wilson is an excellent communicator and has a deep understanding of our customer needs.',
    },
    {
      id: 6,
      name: 'Sophia Miller',
      avatar: 'https://i.pravatar.cc/150?img=6',
      testimonial:
        'Sophia Miller is a team player and her leadership has inspired our team to achieve great results.',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        Testimonials
      </Title>
      <Row gutter={16}>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} xs={24} sm={12} md={8} style={{ marginBottom: '20px' }}>
            <Card>
              <Card.Meta
                avatar={<Avatar src={testimonial.avatar} icon={<UserOutlined />} />}
                title={testimonial.name}
                description={<Paragraph ellipsis={{ rows: 3 }}>{testimonial.testimonial}</Paragraph>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Testimonials;
