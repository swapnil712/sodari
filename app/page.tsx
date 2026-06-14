"use client"

import Accordion from "@/components/Accordion";
import Alert from "@/components/Alert";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import Button, { FabWrapper } from "@/components/Button";
import Card from "@/components/Card";
import Chip from "@/components/Chip";
import Choice, { ChoiceGroup } from "@/components/Choice";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Stepper from "@/components/Stepper";
import Well from "@/components/Well";
import { steps } from "@/constants/steps";
import { useEffect, useState } from "react";

export default function Home() {

  // form state
  const [marketing, setMarketing] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<string>("")

  // selection state
  const [fruits, setFruits] = useState<string[]>(["fruit_orange"])
  const [gender, setGender] = useState<string>("male")

  // dismissible state
  const [showDangerAlert, setShowDangerAlert] = useState<boolean>(true)
  const [showChip, setShowChip] = useState<boolean>(true)

  // helper: toggle a fruit in/out of the array
  const toggleFruit = (id: string) =>
    setFruits(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])


  useEffect(() => {
      setActiveStep( steps[0].id )
  }, [])

  return (
   <div>

      <Button variant="primary" size="lg" label="Button" onClick={() => alert("Primary clicked")} />
      <Button variant="secondary" size="lg" label="Button" />
      <Button variant="ghost" size="lg" label="Button" />
      
      <FabWrapper>
        <Button variant="floating" size="sm" icon="add" />
        <Button variant="floating" size="lg" icon="add" />
      </FabWrapper>

      <Button variant="primary" size="sm" label="Button" />
      <Button variant="secondary" size="sm" label="Button" />
      <Button variant="ghost" size="sm" label="Button" />

      <Badge tone="primary" label="Primary" />
      <Badge tone="success" label="Success" />
      <Badge tone="warning" label="Warning" />
      <Badge tone="neutral" label="Neutral" />
      <Badge tone="error" label="Error" />

      
      <Stepper steps={ steps } direction="row" active={ activeStep } onClick={ setActiveStep }  />
      <Stepper steps={ steps } direction="col" active={ activeStep } onClick={ setActiveStep }  />

      <Well isCollapsed={ true }>
        <Accordion steps={ steps } active={ activeStep } />
      </Well>
      
      {showDangerAlert && (
        <Alert tone="danger" label="This is a danger message." onDismiss={() => setShowDangerAlert(false)} />
      )}
      <Alert tone="info" label="This is an info message." />
      <Alert tone="success" label="This is a success message." />
      <Alert tone="warning" label="This is a warning message." />


      <div className="flex gap-2">
        <Avatar variant="initials" value="SG" />
        <Avatar variant="icon" value="home" bgColor="bg-purple-600" />
        <Avatar variant="image" src="https://picsum.photos/id/237/50/50" alt="Image source" />
      </div>


      <Button variant="secondary" size="lg" label="Show modal" onClick={ () => setShowModal(true)} />
      
      
      { showModal && <Modal 
        title="Create New Form" 
        onClose={ () => setShowModal(false) }
        buttons={[
          {
            label: "Save Form",
            size: "lg",
            variant: "primary",
            onClick: () => null
          },
          {
            label: "Cancel",
            size: "lg",
            variant: "secondary",
            onClick: () => setShowModal(false)
          }
        ]}
      >

        <Input
          id="email"
          leadingIcon="email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText="Use company email where ever possible"
          placeholder="you@example.com"
        />

        <Input
          id="password"
          leadingIcon="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={password.length === 0 ? "Please enter a password" : undefined}
          rightAction={{
            icon: showPassword ? "visibility_off" : "visibility",
            onClick: () => setShowPassword(prev => !prev),
          }}
        />
      
      </Modal> }
      
<Well>

      <ChoiceGroup label="Please select your favorite fruits">
        <Choice id="fruit_apple"  type="checkbox" label="Apple"  subtitle="The ones that grow in trees" isChecked={fruits.includes("fruit_apple")}  onChange={() => toggleFruit("fruit_apple")} />
        <Choice id="fruit_orange" type="checkbox" label="Orange" subtitle="The ones with seeds inside"  isChecked={fruits.includes("fruit_orange")} onChange={() => toggleFruit("fruit_orange")} />
        <Choice id="fruit_grape"  type="checkbox" label="Grapes" subtitle="The one with flesh"          isChecked={fruits.includes("fruit_grape")}  onChange={() => toggleFruit("fruit_grape")} />
      </ChoiceGroup>

      <ChoiceGroup label="Please select your gender">
        <Choice id="gender_male"   type="radio" label="Male"   isChecked={gender === "male"}   onChange={() => setGender("male")} />
        <Choice id="gender_female" type="radio" label="Female" isChecked={gender === "female"} onChange={() => setGender("female")} />
        <Choice id="gender_others" type="radio" label="Others" isChecked={gender === "others"} onChange={() => setGender("others")} />
      </ChoiceGroup>

      <Choice
        id="marketing"
        type="switch"
        label="Sign me up"
        isChecked={marketing}
        onChange={() => setMarketing(prev => !prev)}
        subtitle="You will receive periodic newsletters."
      />
</Well>

      <Well direction="row">
        {showChip && <Chip label="Tasty Chip" dismissAction={() => setShowChip(false)} />}
        <Chip label="Chip with a Plan" icon="person" />
      </Well>

      <Card
        title="Card title"
        maxWidth={250}
        description="Card description"
        media={{ src: "https://picsum.photos/id/237/250/120", alt: "a nice dog" }}
        primaryAction={{ label: "Confirm", onClick: () => alert("Confirmed") }}
        secondaryAction={{ label: "Cancel", onClick: () => alert("Cancelled") }}
      />

      

   </div>
  );
}