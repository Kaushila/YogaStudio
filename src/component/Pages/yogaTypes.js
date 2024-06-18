import React from 'react';
import { Card, Col, Row } from 'antd';

const yogaTypes = [
  {
    title: 'Vinyasa yoga',
    description: `Vinyasa means "to place in a special way" and, in this case, yoga postures. Vinyasa yoga is often considered the most athletic yoga style, and was adapted from ashtanga yoga in the 1980s. Many types of yoga can also be considered "vinyasa flows," such as ashtanga, power yoga, and prana.`,
    practice: 'In vinyasa classes, movements are coordinated with your breath in order to flow from one pose to another.'
  },
  {
    title: 'Hatha yoga',
    description: `The Sanskrit term "hatha" is an umbrella term for all physical postures of yoga. In the West, hatha yoga simply refers to all the other styles of yoga (ashtanga, Iyengar, etc.) that are grounded in a physical practice.`,
    practice: 'Hatha yoga classes are best for beginners since they are usually paced slower than other yoga styles.'
  },
  {
    title: 'Iyengar yoga',
    description: `Iyengar yoga was founded by B.K.S. Iyengar and focuses on alignment as well as detailed and precise movements.`,
    practice: 'Generally, poses are held for a long time while adjusting the minutiae of the pose. Iyengar relies heavily on props to help students perfect their form and go deeper into poses in a safe manner.'
  },
  {
    title: 'Kundalini yoga',
    description: `Kundalini yoga practice is equal parts spiritual and physical. This style is all about releasing the kundalini energy in your body said to be trapped, or coiled, in the lower spine.`,
    practice: 'A kundalini class will really work your core and breath with fast-moving, invigorating postures and breath exercises.'
  },
  {
    title: 'Ashtanga yoga',
    description: `In Sanskrit, ashtanga is translated as "Eight Limb path." In Mysore, India, people gather to practice this form of yoga together at their own pace.`,
    practice: 'Ashtanga yoga involves a very physically demanding sequence of postures, so this style of yoga is definitely not for the beginner.'
  },
  {
    title: 'Bikram yoga',
    description: `Bikram yoga is named after Bikram Choudhury and features a sequence of set poses in a sauna-like room—typically set to 105 degrees and 40% humidity.`,
    practice: 'The sequence never changes and includes a series of 26 basic postures, with each one performed twice.'
  },
  {
    title: 'Yin yoga',
    description: `Yin yoga is a slow-paced style of yoga with seated postures that are held for longer periods of time.`,
    practice: 'Yin is a great class for beginners, as postures can be held anywhere from 45 seconds to 2 minutes.'
  },
  {
    title: 'Restorative yoga',
    description: `Restorative yoga focuses on winding down after a long day and relaxing your mind.`,
    practice: 'You\'ll spend more time in fewer postures throughout a restorative yoga class. Many of the poses are modified to be easier and more relaxing.'
  },
  {
    title: 'Prenatal yoga',
    description: `Prenatal yoga is carefully adapted for moms-to-be, and is tailored to women in all trimesters.`,
    practice: 'During this practice, you\'ll use props in order to modify your poses and ensure stability—in this class, it\'s way more about stability than flexibility.'
  },
  {
    title: 'Anusara yoga',
    description: `Anusara is a modern-day version of hatha yoga, most similar to vinyasa in that it focuses on alignment, but with more emphasis on the mind-body-heart connection.`,
    practice: 'Anusara focuses on spirals and how each body part should be moving, and it\'s also known for its emphasis on heart opening.'
  },
  {
    title: 'Jivamukti yoga',
    description: `Jivamukti was founded in 1984 by Sharon Ganon and David Life. Jivamukti is mainly vinyasa-flow-style classes infused with Hindu spiritual teachings.`,
    practice: 'A series of chants usually open the beginning of class, followed up by a series of poses that align with the five tenets of Jivamukti yoga and philosophy.'
  },
];

const YogaTypes = () => {
  return (
    <div className="site-card-wrapper" style={{ padding: '30px' }}>
      <h1>11 Types Of Yoga</h1>
      <Row gutter={16}>
        {yogaTypes.map((yoga, index) => (
          <Col span={8} key={index} style={{ marginBottom: '20px' }}>
            <Card title={yoga.title} bordered={false}>
              <p>{yoga.description}</p>
              <p><strong>How to practice:</strong> {yoga.practice}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default YogaTypes;
