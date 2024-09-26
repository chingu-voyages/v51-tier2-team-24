import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import React from "react"
import PropTypes from "prop-types"
import { BodyText, Heading } from "@/components/Typography"
import { FIRST_GROUP_STEPS } from "@/lib/constants"
import { useFirstGroupPageContext } from "./hooks/useFirstGroupPageContext"
import { AddGroupDetailsStep } from "./components/AddGroupDetailsStep"
import { AddParticipantsStep } from "./components/AddParticipantsStep"
import { AddExpensesStep } from "./components/AddExpensesStep"
import { LastStep } from "./components/LastStep"

export function FirstGroupPage() {
  const { Scoped } = useFirstGroupPageContext()

  return (
    <>
      <Heading tag="h1" className="mb-6">
        Let&apos;s create your first expense group together!
      </Heading>
      <Scoped>
        <Steps />
        <StepActions className="hidden lg:flex" />
      </Scoped>
    </>
  )
}

const Steps = () => {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  return (
    <>
      <div className="lg:flex lg:w-full lg:items-center mb-4 lg:mb-6">
        {FIRST_GROUP_STEPS.map((step, index, array) => {
          const isCurrentStep = stepper.current.id === step.id
          const isPassedStep =
            index < FIRST_GROUP_STEPS.findIndex((s) => s.id === stepper.current.id)
          const isStepBeforeLast = index === array.length - 2
          const isLastStep = index === array.length - 1

          return (
            <React.Fragment key={step.id}>
              {isLastStep ? null : (
                <div className="step-label-container flex items-center gap-2">
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

                  <BodyText
                    className={cn("font-semibold text-muted-foreground mb-0", {
                      "text-foreground": isCurrentStep || isPassedStep,
                    })}
                  >
                    {step.title}
                  </BodyText>
                </div>
              )}

              {isStepBeforeLast || isLastStep ? null : (
                <div className="step-connector hidden lg:block step-connector flex-1 border-t-2 ml-2"></div>
              )}

              <StepsContent
                className="pt-2"
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
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  return variant === "vertical" ? (
    <div className={cn("lg:hidden", className)}>
      {isCurrentStep && (
        <div
          className={cn("border-l-[.125rem] ml-4 pl-4 mb-4", {
            "border-l-0": isStepBeforeLast,
          })}
        >
          {stepper.when("first", () => (
            <AddGroupDetailsStep includeActions />
          ))}
          {stepper.when("second", () => (
            <AddParticipantsStep includeActions />
          ))}
          {stepper.when("third", () => (
            <AddExpensesStep includeActions />
          ))}
        </div>
      )}
      {isCurrentStep && stepper.when("last", () => <LastStep includeActions />)}
    </div>
  ) : (
    <div className="hidden lg:block lg:mb-4">
      {stepper.when("first", () => (
        <AddGroupDetailsStep />
      ))}

      {stepper.when("second", () => (
        <AddParticipantsStep />
      ))}

      {stepper.when("third", () => (
        <AddExpensesStep />
      ))}

      {stepper.when("last", () => (
        <LastStep />
      ))}
    </div>
  )
}

export const StepActions = ({ className, isWithinForm = false }) => {
  const { useStepper } = useFirstGroupPageContext()
  const stepper = useStepper()

  return (
    <div className={cn("flex items-center gap-4 justify-between", className)}>
      <Button
        onClick={stepper.prev}
        disabled={stepper.isFirst}
        variant="secondary"
        className={cn("disabled:opacity-50 w-full md:w-auto", { "w-auto": stepper.isLast })}
        type="button"
      >
        Back
      </Button>

      {isWithinForm ? (
        <Button className={cn("block w-full md:w-auto", { hidden: stepper.isLast })} type="submit">
          Next
        </Button>
      ) : (
        <Button
          className={cn("block w-full md:w-auto", { hidden: stepper.isLast })}
          onClick={stepper.next}
          type="button"
        >
          Next
        </Button>
      )}

      <div className={cn("hidden", { "flex gap-4": stepper.isLast })}>
        <Button onClick={stepper.reset} type="button">
          Reset
        </Button>
        <Button type="button">Finish</Button>
      </div>
    </div>
  )
}

StepActions.propTypes = {
  className: PropTypes.string,
  isWithinForm: PropTypes.bool,
}

StepsContent.propTypes = {
  className: PropTypes.string,
  isCurrentStep: PropTypes.bool,
  isStepBeforeLast: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "vertical"]),
}
