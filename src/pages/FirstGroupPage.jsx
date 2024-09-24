import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { defineStepper } from "@stepperize/react"
import { Check } from "lucide-react"
import React from "react"
import PropTypes from "prop-types"

const { useStepper, Scoped, steps } = defineStepper(
  { id: "first", title: "Add group details", description: "description" },
  { id: "second", title: "Add participants", description: "description" },
  { id: "third", title: "Add expenses", description: "description" },
  { id: "last", title: "Finish", description: "description" }
)

export function FirstGroupPage() {
  return (
    <Scoped>
      <Steps />
      <StepActions className="hidden lg:flex" />
    </Scoped>
  )
}

const Steps = () => {
  const stepper = useStepper()

  return (
    <>
      <div className="lg:flex lg:w-full lg:items-center">
        {steps.map((step, index, array) => {
          const isCurrentStep = stepper.current.id === step.id
          const isPassedStep = index < steps.findIndex((s) => s.id === stepper.current.id)
          const isStepBeforeLast = index === array.length - 2
          const isLastStep = index === array.length - 1

          return (
            <React.Fragment key={step.id}>
              {isLastStep ? null : (
                <div className="step-label-container flex items-center gap-2 py-2">
                  <div
                    className={cn(
                      "step-icon shrink-0 size-8 rounded-full border-2 flex items-center justify-center",
                      {
                        "border-primary bg-primary text-primary-foreground":
                          isCurrentStep || isPassedStep,
                      }
                    )}
                  >
                    {isPassedStep ? <Check /> : index + 1}
                  </div>

                  <h2
                    className={cn("step-label font-bold text-muted-foreground", {
                      "text-foreground": isCurrentStep || isPassedStep,
                    })}
                  >
                    {step.title}
                  </h2>
                </div>
              )}

              {isStepBeforeLast || isLastStep ? null : (
                <div className="step-connector hidden lg:block step-connector flex-1 border-t-2 ml-2"></div>
              )}

              <StepsContent
                isCurrentStep={isCurrentStep}
                isStepBeforeLast={isStepBeforeLast}
                variant="vertical"
              />
            </React.Fragment>
          )
        })}
      </div>

      <StepsContent />
    </>
  )
}

const StepsContent = ({ className, isCurrentStep, isStepBeforeLast, variant = "default" }) => {
  const stepper = useStepper()

  return variant === "vertical" ? (
    <div className={cn("lg:hidden", className)}>
      {isCurrentStep && (
        <div
          className={cn("border-l-[.125rem] ml-4 pl-4 mb-4", {
            "border-l-0": isStepBeforeLast,
          })}
        >
          {stepper.when("first", (step) => (
            <AddGroupDetailsStep step={step} includeActions />
          ))}
          {stepper.when("second", (step) => (
            <AddParticipantsStep step={step} includeActions />
          ))}
          {stepper.when("third", (step) => (
            <AddExpensesStep step={step} includeActions />
          ))}
        </div>
      )}
      {isCurrentStep && stepper.when("last", () => <LastStep includeActions />)}
    </div>
  ) : (
    <div className="hidden lg:block">
      {stepper.when("first", (step) => (
        <AddGroupDetailsStep step={step} />
      ))}

      {stepper.when("second", (step) => (
        <AddParticipantsStep step={step} />
      ))}

      {stepper.when("third", (step) => (
        <AddExpensesStep step={step} />
      ))}

      {stepper.when("last", () => (
        <LastStep />
      ))}
    </div>
  )
}

const StepActions = ({ className }) => {
  const stepper = useStepper()

  return (
    <div className={cn("flex items-center gap-4 mt-6 lg:justify-between", className)}>
      <Button
        onClick={stepper.prev}
        disabled={stepper.isFirst}
        variant="secondary"
        className="disabled:opacity-50"
      >
        Back
      </Button>
      <Button className={cn("block", { hidden: stepper.isLast })} onClick={stepper.next}>
        {"Next"}
      </Button>
      <div className={cn("hidden", { "flex gap-4 ml-auto": stepper.isLast })}>
        <Button onClick={stepper.reset}>Reset</Button>
        <Button>Finish</Button>
      </div>
    </div>
  )
}

// === CONTENT COMPONENTS FOR EACH STEP ===

const AddGroupDetailsStep = ({ step, includeActions = false }) => {
  return (
    <div>
      <p>content for: {step.title}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates, voluptatem,
        aliquam, mollitia libero magnam ut dolorem quibusdam quod id rem minus reiciendis ipsum eos!
        Veritatis molestias cupiditate doloribus corporis?
      </p>
      {includeActions && <StepActions />}
    </div>
  )
}

const AddParticipantsStep = ({ step, includeActions = false }) => {
  return (
    <div>
      <p>content for: {step.title}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates, voluptatem,
        aliquam, mollitia libero magnam ut dolorem quibusdam quod id rem minus reiciendis ipsum eos!
        Veritatis molestias cupiditate doloribus corporis?
      </p>
      {includeActions && <StepActions />}
    </div>
  )
}

const AddExpensesStep = ({ step, includeActions = false }) => {
  return (
    <div>
      <p>content for: {step.title}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates, voluptatem,
        aliquam, mollitia libero magnam ut dolorem quibusdam quod id rem minus reiciendis ipsum eos!
        Veritatis molestias cupiditate doloribus corporis?
      </p>
      {includeActions && <StepActions />}
    </div>
  )
}

const LastStep = ({ includeActions = false }) => {
  return (
    <div className="px-4">
      <p>content for Last Step</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates, voluptatem,
        aliquam, mollitia libero magnam ut dolorem quibusdam quod id rem minus reiciendis ipsum eos!
        Veritatis molestias cupiditate doloribus corporis?
      </p>
      {includeActions && <StepActions />}
    </div>
  )
}

// === PROP TYPES ===

const StepType = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

const StepsTypes = {
  step: PropTypes.shape(StepType).isRequired,
  includeActions: PropTypes.bool,
}

AddGroupDetailsStep.propTypes = StepsTypes
AddParticipantsStep.propTypes = StepsTypes
AddExpensesStep.propTypes = StepsTypes

LastStep.propTypes = {
  ...StepsTypes,
  step: undefined,
}

LastStep.propTypes = {
  className: PropTypes.string,
}

StepActions.propTypes = {
  className: PropTypes.string,
}

StepsContent.propTypes = {
  className: PropTypes.string,
  isCurrentStep: PropTypes.bool,
  isStepBeforeLast: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "vertical"]),
}
